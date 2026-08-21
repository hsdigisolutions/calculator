"use client";

import { useMemo, useState, useCallback } from "react";
import type {
  CalculatorDefinition,
  CalculatorField,
  CalculatorResult,
  ComputeInputs,
} from "@/lib/types";
import { getEngine } from "@/lib/engines";
import {
  cn,
  formatResult,
  num,
  splitResultDisplay,
} from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/Icon";
import { useCountUp } from "./useCountUp";

function initialValues(def: CalculatorDefinition): ComputeInputs {
  const v: ComputeInputs = {};
  for (const f of def.fields) {
    v[f.id] =
      f.defaultValue !== undefined && f.defaultValue !== null
        ? String(f.defaultValue)
        : "";
  }
  return v;
}

const DISCLAIMERS: Record<string, string> = {
  health:
    "This calculator provides estimates based on population research. Results are not medical advice. Consult a qualified healthcare provider before making health or nutrition decisions.",
  finance:
    "This calculator is for illustrative purposes only. Actual rates, fees and terms vary by lender. Consult a qualified financial adviser before making borrowing decisions.",
  tax:
    "This calculator is for general guidance only and is not tax advice. Rules vary by jurisdiction and year; confirm with a qualified professional.",
};

export function CalculatorShell({
  definition,
}: {
  definition: CalculatorDefinition;
}) {
  const [values, setValues] = useState<ComputeInputs>(() =>
    initialValues(definition)
  );
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // Engines are registered by calculator id (e.g. "mortgage"), not slug.
  const engine = getEngine(definition.id);

  const outputs = useMemo(() => {
    if (!engine) return {};
    try {
      return engine(values);
    } catch {
      return {};
    }
  }, [engine, values]);

  const missingRequired = definition.fields.some(
    (f) => f.required && !isFilled(f, values[f.id])
  );

  const primary = definition.results.find((r) => r.isPrimary) ?? definition.results[0];
  const secondary = definition.results.filter((r) => r !== primary);

  const primaryRaw = outputs[primary.id];
  const primaryIsNumber =
    typeof primaryRaw === "number" &&
    primary.format !== "text";
  const hasResult =
    !missingRequired &&
    primaryRaw !== undefined &&
    (typeof primaryRaw === "string" || Number.isFinite(primaryRaw));

  const setField = useCallback((id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  }, []);

  const reset = () => {
    setValues(initialValues(definition));
    setTouched({});
  };

  const copyResult = async () => {
    if (!hasResult) return;
    const text = formatResult(primaryRaw as number, primary);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  const disclaimer =
    definition.sensitivity && definition.sensitivity !== "none"
      ? DISCLAIMERS[definition.sensitivity]
      : null;

  return (
    <Card glass className="p-5 sm:p-8 animate-scale-in">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {definition.fields.map((field) => (
          <Field
            key={field.id}
            field={field}
            value={values[field.id]}
            invalid={
              field.required &&
              touched[field.id] &&
              !isFilled(field, values[field.id])
            }
            onChange={(v) => setField(field.id, v)}
            onBlur={() =>
              setTouched((t) => ({ ...t, [field.id]: true }))
            }
          />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-xs text-text-tertiary">
          Results update as you type.
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <Icon name="RotateCcw" size={15} />
          Reset
        </button>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-line" />

      {/* Result */}
      <ResultDisplay
        primary={primary}
        primaryRaw={primaryRaw}
        primaryIsNumber={primaryIsNumber}
        hasResult={hasResult}
        secondary={secondary}
        outputs={outputs}
        onCopy={copyResult}
        copied={copied}
      />

      {disclaimer && (
        <p className="mt-6 flex gap-2 text-xs text-text-tertiary leading-relaxed">
          <Icon name="Info" size={14} className="mt-0.5 shrink-0" />
          <span>{disclaimer}</span>
        </p>
      )}
    </Card>
  );
}

/* ---------------- Result display ---------------- */

function ResultDisplay({
  primary,
  primaryRaw,
  primaryIsNumber,
  hasResult,
  secondary,
  outputs,
  onCopy,
  copied,
}: {
  primary: CalculatorResult;
  primaryRaw: number | string | undefined;
  primaryIsNumber: boolean;
  hasResult: boolean;
  secondary: CalculatorResult[];
  outputs: Record<string, number | string>;
  onCopy: () => void;
  copied: boolean;
}) {
  const animated = useCountUp(
    primaryIsNumber ? (primaryRaw as number) : 0,
    [primaryIsNumber ? primaryRaw : 0]
  );

  let mainText = "—";
  let suffix = "";
  if (hasResult) {
    if (primaryIsNumber) {
      const formatted = formatResult(animated, primary);
      const parts = splitResultDisplay(formatted);
      mainText = parts.main;
      suffix = parts.suffix;
    } else {
      mainText = String(primaryRaw);
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs font-medium uppercase tracking-widest text-text-secondary">
            {primary.label}
          </div>
          <div
            className={cn(
              "mt-2 font-mono font-semibold tabular tracking-tight text-text-primary",
              "text-5xl sm:text-6xl leading-none",
              !hasResult && "text-text-tertiary"
            )}
          >
            {mainText}
            {suffix && (
              <span className="ml-2 text-xl sm:text-2xl font-medium text-text-secondary align-baseline">
                {suffix}
              </span>
            )}
          </div>
          {primary.description && hasResult && (
            <p className="mt-2 text-sm text-text-secondary">
              {primary.description}
            </p>
          )}
        </div>

        {hasResult && primaryIsNumber && (
          <button
            type="button"
            onClick={onCopy}
            aria-label="Copy result"
            className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 text-text-secondary hover:text-text-primary hover:bg-surface-3 transition-colors"
          >
            <Icon name={copied ? "Check" : "Copy"} size={17} />
          </button>
        )}
      </div>

      {/* Secondary breakdown */}
      {secondary.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
          {secondary.map((r) => {
            const raw = outputs[r.id];
            const show =
              hasResult &&
              raw !== undefined &&
              (typeof raw === "string" || Number.isFinite(raw));
            return (
              <div
                key={r.id}
                className="flex items-center justify-between gap-3 py-3 border-b border-line last:border-0"
              >
                <span className="text-sm text-text-secondary">{r.label}</span>
                <span className="font-mono text-sm font-medium tabular text-text-primary">
                  {show ? formatResult(raw as number, r) : "—"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ---------------- Field ---------------- */

function isFilled(field: CalculatorField, value: string): boolean {
  if (value === undefined || value === null || value.trim() === "") return false;
  if (field.type === "number") return !Number.isNaN(num(value));
  return true;
}

function Field({
  field,
  value,
  invalid,
  onChange,
  onBlur,
}: {
  field: CalculatorField;
  value: string;
  invalid?: boolean;
  onChange: (v: string) => void;
  onBlur: () => void;
}) {
  const span = field.span === 2 ? "sm:col-span-2" : "sm:col-span-1";

  const inputClasses = cn(
    "w-full h-[52px] rounded-xl bg-surface-3 px-4 text-base text-text-primary",
    "placeholder:text-text-tertiary transition-all duration-200",
    "border border-line-strong hover:border-[var(--color-border-hover)] focus:border-brand",
    "focus-visible:shadow-[var(--focus-ring)] outline-none",
    field.unit && field.type === "number" && "pr-14",
    invalid && "border-danger animate-shake"
  );

  return (
    <div className={cn("flex flex-col gap-1.5", span)}>
      <label
        htmlFor={field.id}
        className="text-sm font-medium text-text-secondary px-1"
      >
        {field.label}
        {!field.required && (
          <span className="ml-1.5 text-text-tertiary font-normal">
            (optional)
          </span>
        )}
      </label>

      <div className="relative">
        {field.type === "select" ? (
          <select
            id={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            className={cn(inputClasses, "appearance-none pr-10 cursor-pointer")}
          >
            {field.options?.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={field.id}
            type={field.type === "number" ? "number" : field.type === "date" ? "date" : "text"}
            inputMode={field.type === "number" ? "decimal" : undefined}
            value={value}
            placeholder={field.placeholder}
            min={field.min}
            max={field.max}
            step={field.step}
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            className={inputClasses}
          />
        )}

        {field.unit && field.type === "number" && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-text-tertiary">
            {field.unit}
          </span>
        )}
        {field.type === "select" && (
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-text-tertiary">
            <Icon name="ChevronDown" size={18} />
          </span>
        )}
      </div>

      {field.helpText && (
        <p className="text-xs text-text-tertiary px-1">{field.helpText}</p>
      )}
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 ease-spring select-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99]";

const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-md hover:shadow-glow hover:scale-[1.01] bg-[linear-gradient(135deg,var(--brand),var(--brand-600))]",
  secondary:
    "bg-surface-2 text-text-primary hover:bg-surface-3 border border-line",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-6 text-base w-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

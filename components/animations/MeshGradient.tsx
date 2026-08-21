/**
 * Decorative animated background for the hero. Pure CSS (see `.mesh` in
 * globals.css) — three slow-drifting radial gradients. Server component,
 * ships no JS, and pauses under prefers-reduced-motion.
 */
export function MeshGradient() {
  return <div className="mesh" aria-hidden="true" />;
}

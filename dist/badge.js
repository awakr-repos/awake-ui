// src/badge/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Badge({ children, variant = "default", className }) {
  return /* @__PURE__ */ jsx("span", { className: clsx("awake-badge", `awake-badge--${variant}`, className), children });
}
export {
  Badge
};
//# sourceMappingURL=badge.js.map
// src/loading/index.tsx
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
var sizeClasses = {
  sm: "awake-loading-dot--sm",
  md: "awake-loading-dot--md",
  lg: "awake-loading-dot--lg"
};
function Loading({ size = "md", label = "Loading\u2026", className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "status",
      "aria-label": label,
      className: clsx("awake-loading-container", className),
      ...props,
      children: /* @__PURE__ */ jsxs("div", { className: "awake-loading-dots", children: [
        /* @__PURE__ */ jsx("span", { className: clsx("awake-loading-dot", sizeClasses[size]) }),
        /* @__PURE__ */ jsx("span", { className: clsx("awake-loading-dot", sizeClasses[size]) }),
        /* @__PURE__ */ jsx("span", { className: clsx("awake-loading-dot", sizeClasses[size]) })
      ] })
    }
  );
}
export {
  Loading
};
//# sourceMappingURL=loading.js.map
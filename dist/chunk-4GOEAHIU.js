// src/button/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: clsx(
        "awake-button",
        `awake-button--${variant}`,
        `awake-button--${size}`,
        className
      ),
      children
    }
  );
}

export {
  Button
};
//# sourceMappingURL=chunk-4GOEAHIU.js.map
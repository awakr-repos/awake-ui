"use client";

// src/toggle/index.tsx
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, size = "md", variant = "default", ...props }) {
  return /* @__PURE__ */ jsx(
    BaseToggle,
    {
      className: clsx(
        "awake-toggle",
        `awake-toggle--${size}`,
        `awake-toggle--${variant}`,
        className
      ),
      ...props
    }
  );
}
function Group({ className, size = "md", ...props }) {
  return /* @__PURE__ */ jsx(
    BaseToggleGroup,
    {
      className: clsx("awake-toggle-group", `awake-toggle-group--${size}`, className),
      ...props
    }
  );
}
var Toggle = { Root, Group };
export {
  Toggle
};
//# sourceMappingURL=toggle.js.map
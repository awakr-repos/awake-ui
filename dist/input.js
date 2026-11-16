"use client";

// src/input/index.tsx
import { Input as BaseInput } from "@base-ui/react/input";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Input({ className, size = "md", ...props }) {
  return /* @__PURE__ */ jsx(
    BaseInput,
    {
      className: clsx(
        "awake-input",
        size === "sm" && "awake-input--sm",
        size === "lg" && "awake-input--lg",
        className
      ),
      ...props
    }
  );
}
export {
  Input
};
//# sourceMappingURL=input.js.map
"use client";

// src/switch/index.tsx
import { Switch as BaseUISwitch } from "@base-ui/react/switch";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUISwitch.Root, { className: clsx("awake-switch-root", className), ...props });
}
function Thumb({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUISwitch.Thumb, { className: clsx("awake-switch-thumb", className), ...props });
}
var Switch = { Root, Thumb };
export {
  Switch
};
//# sourceMappingURL=switch.js.map
"use client";

// src/number-field/index.tsx
import { NumberField as BaseUINumberField } from "@base-ui/react/number-field";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUINumberField.Root, { ...props, className: clsx("awake-number-field-root", props.className) });
}
function Group(props) {
  return /* @__PURE__ */ jsx(BaseUINumberField.Group, { ...props, className: clsx("awake-number-field-group", props.className) });
}
function Input(props) {
  return /* @__PURE__ */ jsx(BaseUINumberField.Input, { ...props, className: clsx("awake-number-field-input", props.className) });
}
function Increment(props) {
  return /* @__PURE__ */ jsx(BaseUINumberField.Increment, { ...props, className: clsx("awake-number-field-button awake-number-field-increment", props.className) });
}
function Decrement(props) {
  return /* @__PURE__ */ jsx(BaseUINumberField.Decrement, { ...props, className: clsx("awake-number-field-button awake-number-field-decrement", props.className) });
}
function ScrubArea(props) {
  return /* @__PURE__ */ jsx(BaseUINumberField.ScrubArea, { ...props, className: clsx("awake-number-field-scrub-area", props.className) });
}
function ScrubAreaCursor(props) {
  return /* @__PURE__ */ jsx(BaseUINumberField.ScrubAreaCursor, { ...props, className: clsx("awake-number-field-scrub-cursor", props.className) });
}
var NumberField = { Root, Group, Input, Increment, Decrement, ScrubArea, ScrubAreaCursor };
export {
  NumberField
};
//# sourceMappingURL=number-field.js.map
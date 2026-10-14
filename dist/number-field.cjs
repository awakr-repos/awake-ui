"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/number-field/index.tsx
var number_field_exports = {};
__export(number_field_exports, {
  NumberField: () => NumberField
});
module.exports = __toCommonJS(number_field_exports);
var import_number_field = require("@base-ui/react/number-field");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_number_field.NumberField.Root, { ...props, className: (0, import_clsx.clsx)("awake-number-field-root", props.className) });
}
function Group(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_number_field.NumberField.Group, { ...props, className: (0, import_clsx.clsx)("awake-number-field-group", props.className) });
}
function Input(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_number_field.NumberField.Input, { ...props, className: (0, import_clsx.clsx)("awake-number-field-input", props.className) });
}
function Increment(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_number_field.NumberField.Increment, { ...props, className: (0, import_clsx.clsx)("awake-number-field-button awake-number-field-increment", props.className) });
}
function Decrement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_number_field.NumberField.Decrement, { ...props, className: (0, import_clsx.clsx)("awake-number-field-button awake-number-field-decrement", props.className) });
}
function ScrubArea(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_number_field.NumberField.ScrubArea, { ...props, className: (0, import_clsx.clsx)("awake-number-field-scrub-area", props.className) });
}
function ScrubAreaCursor(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_number_field.NumberField.ScrubAreaCursor, { ...props, className: (0, import_clsx.clsx)("awake-number-field-scrub-cursor", props.className) });
}
var NumberField = { Root, Group, Input, Increment, Decrement, ScrubArea, ScrubAreaCursor };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NumberField
});
//# sourceMappingURL=number-field.cjs.map
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

// src/slider/index.tsx
var slider_exports = {};
__export(slider_exports, {
  Slider: () => Slider
});
module.exports = __toCommonJS(slider_exports);
var import_slider = require("@base-ui/react/slider");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_slider.Slider.Root, { ...props, className: (0, import_clsx.clsx)("awake-slider-root", props.className) });
}
function Control(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_slider.Slider.Control, { ...props, className: (0, import_clsx.clsx)("awake-slider-control", props.className) });
}
function Track(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_slider.Slider.Track, { ...props, className: (0, import_clsx.clsx)("awake-slider-track", props.className) });
}
function Indicator(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_slider.Slider.Indicator, { ...props, className: (0, import_clsx.clsx)("awake-slider-indicator", props.className) });
}
function Thumb(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_slider.Slider.Thumb, { ...props, className: (0, import_clsx.clsx)("awake-slider-thumb", props.className) });
}
var Slider = { Root, Control, Track, Indicator, Thumb };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Slider
});
//# sourceMappingURL=slider.cjs.map
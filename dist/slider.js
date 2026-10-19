"use client";

// src/slider/index.tsx
import { Slider as BaseUISlider } from "@base-ui/react/slider";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUISlider.Root, { ...props, className: clsx("awake-slider-root", props.className) });
}
function Control(props) {
  return /* @__PURE__ */ jsx(BaseUISlider.Control, { ...props, className: clsx("awake-slider-control", props.className) });
}
function Track(props) {
  return /* @__PURE__ */ jsx(BaseUISlider.Track, { ...props, className: clsx("awake-slider-track", props.className) });
}
function Indicator(props) {
  return /* @__PURE__ */ jsx(BaseUISlider.Indicator, { ...props, className: clsx("awake-slider-indicator", props.className) });
}
function Thumb(props) {
  return /* @__PURE__ */ jsx(BaseUISlider.Thumb, { ...props, className: clsx("awake-slider-thumb", props.className) });
}
var Slider = { Root, Control, Track, Indicator, Thumb };
export {
  Slider
};
//# sourceMappingURL=slider.js.map
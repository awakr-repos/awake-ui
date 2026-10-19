"use client";

// src/progress/index.tsx
import { Progress as BaseUIProgress } from "@base-ui/react/progress";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(
    BaseUIProgress.Root,
    {
      ...props,
      className: clsx("awake-progress-root", props.className)
    }
  );
}
function Track(props) {
  return /* @__PURE__ */ jsx(
    BaseUIProgress.Track,
    {
      ...props,
      className: clsx("awake-progress-track", props.className)
    }
  );
}
function Indicator(props) {
  return /* @__PURE__ */ jsx(
    BaseUIProgress.Indicator,
    {
      ...props,
      className: clsx("awake-progress-indicator", props.className)
    }
  );
}
function Value(props) {
  return /* @__PURE__ */ jsx(
    BaseUIProgress.Value,
    {
      ...props,
      className: clsx("awake-progress-value", props.className)
    }
  );
}
function Label(props) {
  return /* @__PURE__ */ jsx(
    BaseUIProgress.Label,
    {
      ...props,
      className: clsx("awake-progress-label", props.className)
    }
  );
}
var Progress = { Root, Track, Indicator, Value, Label };
export {
  Progress
};
//# sourceMappingURL=progress.js.map
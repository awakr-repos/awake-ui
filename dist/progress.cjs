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

// src/progress/index.tsx
var progress_exports = {};
__export(progress_exports, {
  Progress: () => Progress
});
module.exports = __toCommonJS(progress_exports);
var import_progress = require("@base-ui/react/progress");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_progress.Progress.Root,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-progress-root", props.className)
    }
  );
}
function Track(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_progress.Progress.Track,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-progress-track", props.className)
    }
  );
}
function Indicator(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_progress.Progress.Indicator,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-progress-indicator", props.className)
    }
  );
}
function Value(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_progress.Progress.Value,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-progress-value", props.className)
    }
  );
}
function Label(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_progress.Progress.Label,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-progress-label", props.className)
    }
  );
}
var Progress = { Root, Track, Indicator, Value, Label };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Progress
});
//# sourceMappingURL=progress.cjs.map
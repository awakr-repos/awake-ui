"use strict";
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

// src/loading/index.tsx
var loading_exports = {};
__export(loading_exports, {
  Loading: () => Loading
});
module.exports = __toCommonJS(loading_exports);
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
var sizeClasses = {
  sm: "awake-loading-dot--sm",
  md: "awake-loading-dot--md",
  lg: "awake-loading-dot--lg"
};
function Loading({ size = "md", label = "Loading\u2026", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      role: "status",
      "aria-label": label,
      className: (0, import_clsx.clsx)("awake-loading-container", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "awake-loading-dots", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_clsx.clsx)("awake-loading-dot", sizeClasses[size]) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_clsx.clsx)("awake-loading-dot", sizeClasses[size]) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_clsx.clsx)("awake-loading-dot", sizeClasses[size]) })
      ] })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Loading
});
//# sourceMappingURL=loading.cjs.map
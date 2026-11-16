"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/checkbox/index.tsx
var checkbox_exports = {};
__export(checkbox_exports, {
  Checkbox: () => Checkbox
});
module.exports = __toCommonJS(checkbox_exports);
var import_checkbox = require("@base-ui/react/checkbox");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_checkbox.Checkbox.Root,
    {
      className: (0, import_clsx.default)("awake-checkbox-root", className),
      ...props
    }
  );
}
function Indicator({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_checkbox.Checkbox.Indicator,
    {
      className: (0, import_clsx.default)("awake-checkbox-indicator", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "svg",
        {
          className: "awake-checkbox-icon",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              d: "M2 6l3 3 5-5",
              stroke: "currentColor",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      )
    }
  );
}
var Checkbox = { Root, Indicator };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox
});
//# sourceMappingURL=checkbox.cjs.map
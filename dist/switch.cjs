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

// src/switch/index.tsx
var switch_exports = {};
__export(switch_exports, {
  Switch: () => Switch
});
module.exports = __toCommonJS(switch_exports);
var import_switch = require("@base-ui/react/switch");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_switch.Switch.Root, { className: (0, import_clsx.clsx)("awake-switch-root", className), ...props });
}
function Thumb({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_switch.Switch.Thumb, { className: (0, import_clsx.clsx)("awake-switch-thumb", className), ...props });
}
var Switch = { Root, Thumb };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Switch
});
//# sourceMappingURL=switch.cjs.map
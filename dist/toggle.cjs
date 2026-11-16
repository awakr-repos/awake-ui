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

// src/toggle/index.tsx
var toggle_exports = {};
__export(toggle_exports, {
  Toggle: () => Toggle
});
module.exports = __toCommonJS(toggle_exports);
var import_toggle = require("@base-ui/react/toggle");
var import_toggle_group = require("@base-ui/react/toggle-group");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root({ className, size = "md", variant = "default", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_toggle.Toggle,
    {
      className: (0, import_clsx.default)(
        "awake-toggle",
        `awake-toggle--${size}`,
        `awake-toggle--${variant}`,
        className
      ),
      ...props
    }
  );
}
function Group({ className, size = "md", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_toggle_group.ToggleGroup,
    {
      className: (0, import_clsx.default)("awake-toggle-group", `awake-toggle-group--${size}`, className),
      ...props
    }
  );
}
var Toggle = { Root, Group };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toggle
});
//# sourceMappingURL=toggle.cjs.map
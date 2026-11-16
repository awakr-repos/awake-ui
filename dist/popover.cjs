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

// src/popover/index.tsx
var popover_exports = {};
__export(popover_exports, {
  Popover: () => Popover
});
module.exports = __toCommonJS(popover_exports);
var import_popover = require("@base-ui/react/popover");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Trigger, { className: (0, import_clsx.default)("awake-popover-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Portal, { ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Backdrop, { className: (0, import_clsx.default)("awake-popover-backdrop", className), ...props });
}
function Positioner({ className, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_popover.Popover.Positioner,
    {
      sideOffset,
      className: (0, import_clsx.default)("awake-popover-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_popover.Popover.Popup,
    {
      className: (0, import_clsx.default)("awake-popover-popup", className),
      ...props
    }
  );
}
function Title({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Title, { className: (0, import_clsx.default)("awake-popover-title", className), ...props });
}
function Description({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Description, { className: (0, import_clsx.default)("awake-popover-description", className), ...props });
}
function Close({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Close, { className: (0, import_clsx.default)("awake-popover-close", className), ...props });
}
function Arrow({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_popover.Popover.Arrow, { className: (0, import_clsx.default)("awake-popover-arrow", className), ...props });
}
var Popover = { Root, Trigger, Portal, Backdrop, Positioner, Popup, Title, Description, Close, Arrow };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Popover
});
//# sourceMappingURL=popover.cjs.map
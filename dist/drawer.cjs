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

// src/drawer/index.tsx
var drawer_exports = {};
__export(drawer_exports, {
  Drawer: () => Drawer
});
module.exports = __toCommonJS(drawer_exports);
var import_dialog = require("@base-ui/react/dialog");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Trigger, { className: (0, import_clsx.default)("awake-drawer-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Portal, { ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Backdrop, { className: (0, import_clsx.default)("awake-drawer-backdrop", className), ...props });
}
function Popup({ className, side = "right", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_dialog.Dialog.Popup,
    {
      className: (0, import_clsx.default)("awake-drawer-popup", `awake-drawer-popup--${side}`, className),
      ...props
    }
  );
}
function Title({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Title, { className: (0, import_clsx.default)("awake-drawer-title", className), ...props });
}
function Description({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Description, { className: (0, import_clsx.default)("awake-drawer-description", className), ...props });
}
function Close({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Close, { className: (0, import_clsx.default)("awake-drawer-close", className), ...props });
}
var Drawer = { Root, Trigger, Portal, Backdrop, Popup, Title, Description, Close };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Drawer
});
//# sourceMappingURL=drawer.cjs.map
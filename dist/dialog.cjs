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

// src/dialog/index.tsx
var dialog_exports = {};
__export(dialog_exports, {
  Dialog: () => Dialog
});
module.exports = __toCommonJS(dialog_exports);
var import_dialog = require("@base-ui/react/dialog");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Trigger, { className: (0, import_clsx.clsx)(className), ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Backdrop, { className: (0, import_clsx.clsx)("awake-dialog-backdrop", className), ...props });
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Popup, { className: (0, import_clsx.clsx)("awake-dialog-popup", className), ...props });
}
function Title({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Title, { className: (0, import_clsx.clsx)("awake-dialog-title", className), ...props });
}
function Description({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Description, { className: (0, import_clsx.clsx)("awake-dialog-description", className), ...props });
}
function Close({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dialog.Dialog.Close, { className: (0, import_clsx.clsx)("awake-dialog-close", className), ...props });
}
var Dialog = {
  Root,
  Trigger,
  Portal: import_dialog.Dialog.Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dialog
});
//# sourceMappingURL=dialog.cjs.map
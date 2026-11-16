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

// src/context-menu/index.tsx
var context_menu_exports = {};
__export(context_menu_exports, {
  ContextMenu: () => ContextMenu
});
module.exports = __toCommonJS(context_menu_exports);
var import_context_menu = require("@base-ui/react/context-menu");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.Trigger, { className: (0, import_clsx.default)("awake-context-menu-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.Portal, { ...props });
}
function Positioner({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_context_menu.ContextMenu.Positioner,
    {
      className: (0, import_clsx.default)("awake-context-menu-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.Popup, { className: (0, import_clsx.default)("awake-context-menu-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.Item, { className: (0, import_clsx.default)("awake-context-menu-item", className), ...props });
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.Separator, { className: (0, import_clsx.default)("awake-context-menu-separator", className), ...props });
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.Group, { className: (0, import_clsx.default)("awake-context-menu-group", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_context_menu.ContextMenu.GroupLabel, { className: (0, import_clsx.default)("awake-context-menu-group-label", className), ...props });
}
var ContextMenu = { Root, Trigger, Portal, Positioner, Popup, Item, Separator, Group, GroupLabel };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContextMenu
});
//# sourceMappingURL=context-menu.cjs.map
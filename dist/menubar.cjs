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

// src/menubar/index.tsx
var menubar_exports = {};
__export(menubar_exports, {
  Menubar: () => Menubar
});
module.exports = __toCommonJS(menubar_exports);
var import_menubar = require("@base-ui/react/menubar");
var import_menu = require("@base-ui/react/menu");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menubar.Menubar, { className: (0, import_clsx.default)("awake-menubar", className), ...props });
}
function Menu(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Trigger, { className: (0, import_clsx.default)("awake-menubar-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Portal, { ...props });
}
function Positioner({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_menu.Menu.Positioner,
    {
      sideOffset,
      className: (0, import_clsx.default)("awake-menubar-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Popup, { className: (0, import_clsx.default)("awake-menubar-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Item, { className: (0, import_clsx.default)("awake-menubar-item", className), ...props });
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Separator, { className: (0, import_clsx.default)("awake-menubar-separator", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.GroupLabel, { className: (0, import_clsx.default)("awake-menubar-group-label", className), ...props });
}
var Menubar = { Root, Menu, Trigger, Portal, Positioner, Popup, Item, Separator, GroupLabel };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Menubar
});
//# sourceMappingURL=menubar.cjs.map
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

// src/navigation-menu/index.tsx
var navigation_menu_exports = {};
__export(navigation_menu_exports, {
  NavigationMenu: () => NavigationMenu
});
module.exports = __toCommonJS(navigation_menu_exports);
var import_navigation_menu = require("@base-ui/react/navigation-menu");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Root, { className: (0, import_clsx.default)("awake-nav-root", className), ...props });
}
function List({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.List, { className: (0, import_clsx.default)("awake-nav-list", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Item, { className: (0, import_clsx.default)("awake-nav-item", className), ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Trigger, { className: (0, import_clsx.default)("awake-nav-trigger", className), ...props });
}
function Link({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Link, { className: (0, import_clsx.default)("awake-nav-link", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Portal, { ...props });
}
function Positioner({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Positioner, { className: (0, import_clsx.default)("awake-nav-positioner", className), ...props });
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Popup, { className: (0, import_clsx.default)("awake-nav-popup", className), ...props });
}
function Viewport({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Viewport, { className: (0, import_clsx.default)("awake-nav-viewport", className), ...props });
}
function Arrow({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_navigation_menu.NavigationMenu.Arrow, { className: (0, import_clsx.default)("awake-nav-arrow", className), ...props });
}
var NavigationMenu = { Root, List, Item, Trigger, Link, Portal, Positioner, Popup, Viewport, Arrow };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NavigationMenu
});
//# sourceMappingURL=navigation-menu.cjs.map
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

// src/menu/index.tsx
var menu_exports = {};
__export(menu_exports, {
  Menu: () => Menu
});
module.exports = __toCommonJS(menu_exports);
var import_menu = require("@base-ui/react/menu");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Trigger, { className: (0, import_clsx.default)("awake-menu-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Portal, { ...props });
}
function Positioner({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_menu.Menu.Positioner,
    {
      sideOffset,
      className: (0, import_clsx.default)("awake-menu-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Popup, { className: (0, import_clsx.default)("awake-menu-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Item, { className: (0, import_clsx.default)("awake-menu-item", className), ...props });
}
function CheckboxItem({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.CheckboxItem, { className: (0, import_clsx.default)("awake-menu-item", "awake-menu-checkbox-item", className), ...props });
}
function RadioGroup(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.RadioGroup, { ...props });
}
function RadioItem({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.RadioItem, { className: (0, import_clsx.default)("awake-menu-item", "awake-menu-radio-item", className), ...props });
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Separator, { className: (0, import_clsx.default)("awake-menu-separator", className), ...props });
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.Group, { className: (0, import_clsx.default)("awake-menu-group", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.GroupLabel, { className: (0, import_clsx.default)("awake-menu-group-label", className), ...props });
}
function SubmenuTrigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_menu.Menu.SubmenuTrigger, { className: (0, import_clsx.default)("awake-menu-item", "awake-menu-submenu-trigger", className), ...props });
}
var Menu = {
  Root,
  Trigger,
  Portal,
  Positioner,
  Popup,
  Item,
  CheckboxItem,
  RadioGroup,
  RadioItem,
  Separator,
  Group,
  GroupLabel,
  SubmenuTrigger
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Menu
});
//# sourceMappingURL=menu.cjs.map
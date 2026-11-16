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

// src/combobox/index.tsx
var combobox_exports = {};
__export(combobox_exports, {
  Combobox: () => Combobox
});
module.exports = __toCommonJS(combobox_exports);
var import_combobox = require("@base-ui/react/combobox");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Root, { ...props });
}
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.InputGroup, { className: (0, import_clsx.default)("awake-combobox-input-wrapper", className), ...props });
}
var InputWrapper = InputGroup;
function Input({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Input, { className: (0, import_clsx.default)("awake-combobox-input", className), ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Trigger, { className: (0, import_clsx.default)("awake-combobox-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Portal, { ...props });
}
function Positioner({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_combobox.Combobox.Positioner,
    {
      sideOffset,
      className: (0, import_clsx.default)("awake-combobox-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Popup, { className: (0, import_clsx.default)("awake-combobox-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Item, { className: (0, import_clsx.default)("awake-combobox-item", className), ...props });
}
function Empty({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Empty, { className: (0, import_clsx.default)("awake-combobox-empty", className), ...props });
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.Group, { className: (0, import_clsx.default)("awake-combobox-group", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_combobox.Combobox.GroupLabel, { className: (0, import_clsx.default)("awake-combobox-group-label", className), ...props });
}
var Combobox = { Root, InputGroup, InputWrapper, Input, Trigger, Portal, Positioner, Popup, Item, Empty, Group, GroupLabel };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Combobox
});
//# sourceMappingURL=combobox.cjs.map
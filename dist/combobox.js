"use client";

// src/combobox/index.tsx
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseCombobox.Root, { ...props });
}
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.InputGroup, { className: clsx("awake-combobox-input-wrapper", className), ...props });
}
var InputWrapper = InputGroup;
function Input({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.Input, { className: clsx("awake-combobox-input", className), ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.Trigger, { className: clsx("awake-combobox-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseCombobox.Portal, { ...props });
}
function Positioner({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseCombobox.Positioner,
    {
      sideOffset,
      className: clsx("awake-combobox-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.Popup, { className: clsx("awake-combobox-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.Item, { className: clsx("awake-combobox-item", className), ...props });
}
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.Empty, { className: clsx("awake-combobox-empty", className), ...props });
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.Group, { className: clsx("awake-combobox-group", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseCombobox.GroupLabel, { className: clsx("awake-combobox-group-label", className), ...props });
}
var Combobox = { Root, InputGroup, InputWrapper, Input, Trigger, Portal, Positioner, Popup, Item, Empty, Group, GroupLabel };
export {
  Combobox
};
//# sourceMappingURL=combobox.js.map
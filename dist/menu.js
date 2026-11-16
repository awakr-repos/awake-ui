"use client";

// src/menu/index.tsx
import { Menu as BaseMenu } from "@base-ui/react/menu";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseMenu.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Trigger, { className: clsx("awake-menu-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseMenu.Portal, { ...props });
}
function Positioner({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseMenu.Positioner,
    {
      sideOffset,
      className: clsx("awake-menu-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Popup, { className: clsx("awake-menu-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Item, { className: clsx("awake-menu-item", className), ...props });
}
function CheckboxItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.CheckboxItem, { className: clsx("awake-menu-item", "awake-menu-checkbox-item", className), ...props });
}
function RadioGroup(props) {
  return /* @__PURE__ */ jsx(BaseMenu.RadioGroup, { ...props });
}
function RadioItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.RadioItem, { className: clsx("awake-menu-item", "awake-menu-radio-item", className), ...props });
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Separator, { className: clsx("awake-menu-separator", className), ...props });
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Group, { className: clsx("awake-menu-group", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.GroupLabel, { className: clsx("awake-menu-group-label", className), ...props });
}
function SubmenuTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.SubmenuTrigger, { className: clsx("awake-menu-item", "awake-menu-submenu-trigger", className), ...props });
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
export {
  Menu
};
//# sourceMappingURL=menu.js.map
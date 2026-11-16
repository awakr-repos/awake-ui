"use client";

// src/menubar/index.tsx
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenubar, { className: clsx("awake-menubar", className), ...props });
}
function Menu(props) {
  return /* @__PURE__ */ jsx(BaseMenu.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Trigger, { className: clsx("awake-menubar-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseMenu.Portal, { ...props });
}
function Positioner({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseMenu.Positioner,
    {
      sideOffset,
      className: clsx("awake-menubar-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Popup, { className: clsx("awake-menubar-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Item, { className: clsx("awake-menubar-item", className), ...props });
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.Separator, { className: clsx("awake-menubar-separator", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseMenu.GroupLabel, { className: clsx("awake-menubar-group-label", className), ...props });
}
var Menubar = { Root, Menu, Trigger, Portal, Positioner, Popup, Item, Separator, GroupLabel };
export {
  Menubar
};
//# sourceMappingURL=menubar.js.map
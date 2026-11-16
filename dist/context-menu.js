"use client";

// src/context-menu/index.tsx
import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseContextMenu.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseContextMenu.Trigger, { className: clsx("awake-context-menu-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseContextMenu.Portal, { ...props });
}
function Positioner({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseContextMenu.Positioner,
    {
      className: clsx("awake-context-menu-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseContextMenu.Popup, { className: clsx("awake-context-menu-popup", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseContextMenu.Item, { className: clsx("awake-context-menu-item", className), ...props });
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseContextMenu.Separator, { className: clsx("awake-context-menu-separator", className), ...props });
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseContextMenu.Group, { className: clsx("awake-context-menu-group", className), ...props });
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseContextMenu.GroupLabel, { className: clsx("awake-context-menu-group-label", className), ...props });
}
var ContextMenu = { Root, Trigger, Portal, Positioner, Popup, Item, Separator, Group, GroupLabel };
export {
  ContextMenu
};
//# sourceMappingURL=context-menu.js.map
"use client";

// src/drawer/index.tsx
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseDialog.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseDialog.Trigger, { className: clsx("awake-drawer-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseDialog.Portal, { ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseDialog.Backdrop, { className: clsx("awake-drawer-backdrop", className), ...props });
}
function Popup({ className, side = "right", ...props }) {
  return /* @__PURE__ */ jsx(
    BaseDialog.Popup,
    {
      className: clsx("awake-drawer-popup", `awake-drawer-popup--${side}`, className),
      ...props
    }
  );
}
function Title({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseDialog.Title, { className: clsx("awake-drawer-title", className), ...props });
}
function Description({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseDialog.Description, { className: clsx("awake-drawer-description", className), ...props });
}
function Close({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseDialog.Close, { className: clsx("awake-drawer-close", className), ...props });
}
var Drawer = { Root, Trigger, Portal, Backdrop, Popup, Title, Description, Close };
export {
  Drawer
};
//# sourceMappingURL=drawer.js.map
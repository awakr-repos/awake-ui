"use client";

// src/popover/index.tsx
import { Popover as BasePopover } from "@base-ui/react/popover";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BasePopover.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePopover.Trigger, { className: clsx("awake-popover-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BasePopover.Portal, { ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePopover.Backdrop, { className: clsx("awake-popover-backdrop", className), ...props });
}
function Positioner({ className, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx(
    BasePopover.Positioner,
    {
      sideOffset,
      className: clsx("awake-popover-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BasePopover.Popup,
    {
      className: clsx("awake-popover-popup", className),
      ...props
    }
  );
}
function Title({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePopover.Title, { className: clsx("awake-popover-title", className), ...props });
}
function Description({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePopover.Description, { className: clsx("awake-popover-description", className), ...props });
}
function Close({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePopover.Close, { className: clsx("awake-popover-close", className), ...props });
}
function Arrow({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePopover.Arrow, { className: clsx("awake-popover-arrow", className), ...props });
}
var Popover = { Root, Trigger, Portal, Backdrop, Positioner, Popup, Title, Description, Close, Arrow };
export {
  Popover
};
//# sourceMappingURL=popover.js.map
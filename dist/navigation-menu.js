"use client";

// src/navigation-menu/index.tsx
import { NavigationMenu as BaseNav } from "@base-ui/react/navigation-menu";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Root, { className: clsx("awake-nav-root", className), ...props });
}
function List({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.List, { className: clsx("awake-nav-list", className), ...props });
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Item, { className: clsx("awake-nav-item", className), ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Trigger, { className: clsx("awake-nav-trigger", className), ...props });
}
function Link({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Link, { className: clsx("awake-nav-link", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseNav.Portal, { ...props });
}
function Positioner({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Positioner, { className: clsx("awake-nav-positioner", className), ...props });
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Popup, { className: clsx("awake-nav-popup", className), ...props });
}
function Viewport({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Viewport, { className: clsx("awake-nav-viewport", className), ...props });
}
function Arrow({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseNav.Arrow, { className: clsx("awake-nav-arrow", className), ...props });
}
var NavigationMenu = { Root, List, Item, Trigger, Link, Portal, Positioner, Popup, Viewport, Arrow };
export {
  NavigationMenu
};
//# sourceMappingURL=navigation-menu.js.map
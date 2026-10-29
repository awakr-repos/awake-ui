"use client";

// src/bottom-nav/index.tsx
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
function BottomNavRoot({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("nav", { className: clsx("awake-bottom-nav", className), ...props, children });
}
function BottomNavItem({ icon, label, active, onClick, className }) {
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: clsx("awake-bottom-nav__item", active && "awake-bottom-nav__item--active", className),
      "aria-current": active ? "page" : void 0,
      onClick,
      children: [
        /* @__PURE__ */ jsx("span", { className: "awake-bottom-nav__icon", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ jsx("span", { className: "awake-bottom-nav__label", children: label })
      ]
    }
  );
}
var BottomNav = {
  Root: BottomNavRoot,
  Item: BottomNavItem
};
export {
  BottomNav
};
//# sourceMappingURL=bottom-nav.js.map
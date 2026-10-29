"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/bottom-nav/index.tsx
var bottom_nav_exports = {};
__export(bottom_nav_exports, {
  BottomNav: () => BottomNav
});
module.exports = __toCommonJS(bottom_nav_exports);
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function BottomNavRoot({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: (0, import_clsx.clsx)("awake-bottom-nav", className), ...props, children });
}
function BottomNavItem({ icon, label, active, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      type: "button",
      className: (0, import_clsx.clsx)("awake-bottom-nav__item", active && "awake-bottom-nav__item--active", className),
      "aria-current": active ? "page" : void 0,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-bottom-nav__icon", "aria-hidden": "true", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-bottom-nav__label", children: label })
      ]
    }
  );
}
var BottomNav = {
  Root: BottomNavRoot,
  Item: BottomNavItem
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BottomNav
});
//# sourceMappingURL=bottom-nav.cjs.map
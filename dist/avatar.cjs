"use strict";
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

// src/avatar/index.tsx
var avatar_exports = {};
__export(avatar_exports, {
  Avatar: () => Avatar
});
module.exports = __toCommonJS(avatar_exports);
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar({ src, alt = "", fallback, size = "md", className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_clsx.clsx)("awake-avatar", `awake-avatar--${size}`, className), "aria-label": alt || void 0, children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "awake-avatar__img", src, alt }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-avatar__fallback", "aria-hidden": "true", children: fallback ?? alt.charAt(0).toUpperCase() }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar
});
//# sourceMappingURL=avatar.cjs.map
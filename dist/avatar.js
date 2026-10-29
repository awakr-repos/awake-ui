// src/avatar/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Avatar({ src, alt = "", fallback, size = "md", className }) {
  return /* @__PURE__ */ jsx("span", { className: clsx("awake-avatar", `awake-avatar--${size}`, className), "aria-label": alt || void 0, children: src ? /* @__PURE__ */ jsx("img", { className: "awake-avatar__img", src, alt }) : /* @__PURE__ */ jsx("span", { className: "awake-avatar__fallback", "aria-hidden": "true", children: fallback ?? alt.charAt(0).toUpperCase() }) });
}
export {
  Avatar
};
//# sourceMappingURL=avatar.js.map
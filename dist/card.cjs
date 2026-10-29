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

// src/card/index.tsx
var card_exports = {};
__export(card_exports, {
  Card: () => Card
});
module.exports = __toCommonJS(card_exports);
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function CardRoot({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.clsx)("awake-card", className), ...props, children });
}
function CardHeader({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.clsx)("awake-card__header", className), ...props, children });
}
function CardTitle({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: (0, import_clsx.clsx)("awake-card__title", className), ...props, children });
}
function CardDescription({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: (0, import_clsx.clsx)("awake-card__description", className), ...props, children });
}
function CardContent({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.clsx)("awake-card__content", className), ...props, children });
}
function CardFooter({ children, className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.clsx)("awake-card__footer", className), ...props, children });
}
var Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card
});
//# sourceMappingURL=card.cjs.map
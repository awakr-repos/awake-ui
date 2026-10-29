// src/card/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function CardRoot({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("awake-card", className), ...props, children });
}
function CardHeader({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("awake-card__header", className), ...props, children });
}
function CardTitle({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("h3", { className: clsx("awake-card__title", className), ...props, children });
}
function CardDescription({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("p", { className: clsx("awake-card__description", className), ...props, children });
}
function CardContent({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("awake-card__content", className), ...props, children });
}
function CardFooter({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("awake-card__footer", className), ...props, children });
}
var Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter
};
export {
  Card
};
//# sourceMappingURL=card.js.map
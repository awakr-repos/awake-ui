"use client";

// src/accordion/index.tsx
import { Accordion as BaseUIAccordion } from "@base-ui/react/accordion";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(
    BaseUIAccordion.Root,
    {
      ...props,
      className: clsx("awake-accordion-root", props.className)
    }
  );
}
function Item(props) {
  return /* @__PURE__ */ jsx(
    BaseUIAccordion.Item,
    {
      ...props,
      className: clsx("awake-accordion-item", props.className)
    }
  );
}
function Header(props) {
  return /* @__PURE__ */ jsx(
    BaseUIAccordion.Header,
    {
      ...props,
      className: clsx("awake-accordion-header", props.className)
    }
  );
}
function Trigger(props) {
  return /* @__PURE__ */ jsx(
    BaseUIAccordion.Trigger,
    {
      ...props,
      className: clsx("awake-accordion-trigger", props.className)
    }
  );
}
function Panel(props) {
  return /* @__PURE__ */ jsx(
    BaseUIAccordion.Panel,
    {
      ...props,
      className: clsx("awake-accordion-panel", props.className)
    }
  );
}
var Accordion = { Root, Item, Header, Trigger, Panel };
export {
  Accordion
};
//# sourceMappingURL=accordion.js.map
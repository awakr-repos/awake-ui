"use client";

// src/collapsible/index.tsx
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseCollapsible.Root,
    {
      className: clsx("awake-collapsible-root", className),
      ...props
    }
  );
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseCollapsible.Trigger,
    {
      className: clsx("awake-collapsible-trigger", className),
      ...props
    }
  );
}
function Panel({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseCollapsible.Panel,
    {
      className: clsx("awake-collapsible-panel", className),
      ...props
    }
  );
}
var Collapsible = { Root, Trigger, Panel };
export {
  Collapsible
};
//# sourceMappingURL=collapsible.js.map
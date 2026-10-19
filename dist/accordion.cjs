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

// src/accordion/index.tsx
var accordion_exports = {};
__export(accordion_exports, {
  Accordion: () => Accordion
});
module.exports = __toCommonJS(accordion_exports);
var import_accordion = require("@base-ui/react/accordion");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_accordion.Accordion.Root,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-accordion-root", props.className)
    }
  );
}
function Item(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_accordion.Accordion.Item,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-accordion-item", props.className)
    }
  );
}
function Header(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_accordion.Accordion.Header,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-accordion-header", props.className)
    }
  );
}
function Trigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_accordion.Accordion.Trigger,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-accordion-trigger", props.className)
    }
  );
}
function Panel(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_accordion.Accordion.Panel,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-accordion-panel", props.className)
    }
  );
}
var Accordion = { Root, Item, Header, Trigger, Panel };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion
});
//# sourceMappingURL=accordion.cjs.map
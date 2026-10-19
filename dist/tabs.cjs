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

// src/tabs/index.tsx
var tabs_exports = {};
__export(tabs_exports, {
  Tabs: () => Tabs
});
module.exports = __toCommonJS(tabs_exports);
var import_tabs = require("@base-ui/react/tabs");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tabs.Tabs.Root,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-tabs-root", props.className)
    }
  );
}
function List(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tabs.Tabs.List,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-tabs-list", props.className)
    }
  );
}
function Tab(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tabs.Tabs.Tab,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-tabs-tab", props.className)
    }
  );
}
function Panel(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tabs.Tabs.Panel,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-tabs-panel", props.className)
    }
  );
}
function Indicator(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_tabs.Tabs.Indicator,
    {
      ...props,
      className: (0, import_clsx.clsx)("awake-tabs-indicator", props.className)
    }
  );
}
var Tabs = { Root, List, Tab, Panel, Indicator };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs
});
//# sourceMappingURL=tabs.cjs.map
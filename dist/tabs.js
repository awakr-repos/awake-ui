"use client";

// src/tabs/index.tsx
import { Tabs as BaseUITabs } from "@base-ui/react/tabs";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(
    BaseUITabs.Root,
    {
      ...props,
      className: clsx("awake-tabs-root", props.className)
    }
  );
}
function List(props) {
  return /* @__PURE__ */ jsx(
    BaseUITabs.List,
    {
      ...props,
      className: clsx("awake-tabs-list", props.className)
    }
  );
}
function Tab(props) {
  return /* @__PURE__ */ jsx(
    BaseUITabs.Tab,
    {
      ...props,
      className: clsx("awake-tabs-tab", props.className)
    }
  );
}
function Panel(props) {
  return /* @__PURE__ */ jsx(
    BaseUITabs.Panel,
    {
      ...props,
      className: clsx("awake-tabs-panel", props.className)
    }
  );
}
function Indicator(props) {
  return /* @__PURE__ */ jsx(
    BaseUITabs.Indicator,
    {
      ...props,
      className: clsx("awake-tabs-indicator", props.className)
    }
  );
}
var Tabs = { Root, List, Tab, Panel, Indicator };
export {
  Tabs
};
//# sourceMappingURL=tabs.js.map
"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/virtual-list/index.tsx
var virtual_list_exports = {};
__export(virtual_list_exports, {
  VirtualList: () => VirtualList
});
module.exports = __toCommonJS(virtual_list_exports);
var import_react_virtual = require("@tanstack/react-virtual");
var import_react = require("react");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function VirtualList({
  items,
  itemHeight,
  renderItem,
  height = 400,
  overscan = 5,
  className,
  viewportClassName,
  style,
  ...props
}) {
  const parentRef = (0, import_react.useRef)(null);
  const virtualizer = (0, import_react_virtual.useVirtualizer)({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    overscan
  });
  (0, import_react.useEffect)(() => {
    virtualizer.measure();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_clsx.default)("awake-virtual-list", className),
      style: { height, width: "100%", maxWidth: 600, ...style },
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "div",
        {
          ref: parentRef,
          className: (0, import_clsx.default)("awake-virtual-list-viewport", viewportClassName),
          style: { width: "100%", height, overflowY: "auto" },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: virtualizer.getTotalSize(), position: "relative" }, children: virtualizer.getVirtualItems().map((virtualItem) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: "awake-virtual-list-item",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`
              },
              children: renderItem(items[virtualItem.index], virtualItem.index)
            },
            virtualItem.key
          )) })
        }
      )
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VirtualList
});
//# sourceMappingURL=virtual-list.cjs.map
"use client";

// src/virtual-list/index.tsx
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
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
  const parentRef = useRef(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    overscan
  });
  useEffect(() => {
    virtualizer.measure();
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx("awake-virtual-list", className),
      style: { height, width: "100%", maxWidth: 600, ...style },
      ...props,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref: parentRef,
          className: clsx("awake-virtual-list-viewport", viewportClassName),
          style: { width: "100%", height, overflowY: "auto" },
          children: /* @__PURE__ */ jsx("div", { style: { height: virtualizer.getTotalSize(), position: "relative" }, children: virtualizer.getVirtualItems().map((virtualItem) => /* @__PURE__ */ jsx(
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
export {
  VirtualList
};
//# sourceMappingURL=virtual-list.js.map
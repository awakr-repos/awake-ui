// src/scroll-area/index.tsx
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseScrollArea.Root,
    {
      className: clsx("awake-scroll-area", className),
      ...props
    }
  );
}
function Viewport({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseScrollArea.Viewport,
    {
      className: clsx("awake-scroll-area-viewport", className),
      ...props
    }
  );
}
function Scrollbar({ className, orientation = "vertical", ...props }) {
  return /* @__PURE__ */ jsx(
    BaseScrollArea.Scrollbar,
    {
      orientation,
      className: clsx(
        "awake-scroll-area-scrollbar",
        orientation === "horizontal" && "awake-scroll-area-scrollbar--horizontal",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(BaseScrollArea.Thumb, { className: "awake-scroll-area-thumb" })
    }
  );
}
var ScrollArea = { Root, Viewport, Scrollbar };

export {
  ScrollArea
};
//# sourceMappingURL=chunk-SKLTYE33.js.map
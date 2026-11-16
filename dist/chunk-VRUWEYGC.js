// src/checkbox/index.tsx
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseCheckbox.Root,
    {
      className: clsx("awake-checkbox-root", className),
      ...props
    }
  );
}
function Indicator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseCheckbox.Indicator,
    {
      className: clsx("awake-checkbox-indicator", className),
      ...props,
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          className: "awake-checkbox-icon",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              d: "M2 6l3 3 5-5",
              stroke: "currentColor",
              strokeWidth: "1.8",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        }
      )
    }
  );
}
var Checkbox = { Root, Indicator };

export {
  Checkbox
};
//# sourceMappingURL=chunk-VRUWEYGC.js.map
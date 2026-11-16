"use client";

// src/radio-group/index.tsx
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseRadioGroup,
    {
      className: clsx("awake-radio-group", className),
      ...props
    }
  );
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseRadio.Root,
    {
      className: clsx("awake-radio", className),
      ...props,
      children: /* @__PURE__ */ jsx(BaseRadio.Indicator, { className: "awake-radio-indicator" })
    }
  );
}
var RadioGroup = { Root, Item };
export {
  RadioGroup
};
//# sourceMappingURL=radio-group.js.map
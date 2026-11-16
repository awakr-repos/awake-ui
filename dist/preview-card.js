"use client";

// src/preview-card/index.tsx
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BasePreviewCard.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePreviewCard.Trigger, { className: clsx("awake-preview-card-trigger", className), ...props });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BasePreviewCard.Portal, { ...props });
}
function Positioner({ className, sideOffset = 8, ...props }) {
  return /* @__PURE__ */ jsx(
    BasePreviewCard.Positioner,
    {
      sideOffset,
      className: clsx("awake-preview-card-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BasePreviewCard.Popup,
    {
      className: clsx("awake-preview-card-popup", className),
      ...props
    }
  );
}
function Arrow({ className, ...props }) {
  return /* @__PURE__ */ jsx(BasePreviewCard.Arrow, { className: clsx("awake-preview-card-arrow", className), ...props });
}
var PreviewCard = { Root, Trigger, Portal, Positioner, Popup, Arrow };
export {
  PreviewCard
};
//# sourceMappingURL=preview-card.js.map
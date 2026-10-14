"use client";
import {
  Button
} from "./chunk-4GOEAHIU.js";

// src/pagination/index.tsx
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      "aria-label": "Pagination",
      className: clsx("awake-pagination", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            disabled: currentPage <= 1,
            onClick: () => onPageChange(currentPage - 1),
            "aria-label": "Previous page",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "awake-pagination-info", children: [
          "Page ",
          currentPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            disabled: currentPage >= totalPages,
            onClick: () => onPageChange(currentPage + 1),
            "aria-label": "Next page",
            children: "Next"
          }
        )
      ]
    }
  );
}
export {
  Pagination
};
//# sourceMappingURL=pagination.js.map
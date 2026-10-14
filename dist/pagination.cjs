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

// src/pagination/index.tsx
var pagination_exports = {};
__export(pagination_exports, {
  Pagination: () => Pagination
});
module.exports = __toCommonJS(pagination_exports);
var import_clsx2 = require("clsx");

// src/button/index.tsx
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      ...props,
      className: (0, import_clsx.clsx)(
        "awake-button",
        `awake-button--${variant}`,
        `awake-button--${size}`,
        className
      ),
      children
    }
  );
}

// src/pagination/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "nav",
    {
      "aria-label": "Pagination",
      className: (0, import_clsx2.clsx)("awake-pagination", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Button,
          {
            variant: "secondary",
            disabled: currentPage <= 1,
            onClick: () => onPageChange(currentPage - 1),
            "aria-label": "Previous page",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "awake-pagination-info", children: [
          "Page ",
          currentPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagination
});
//# sourceMappingURL=pagination.cjs.map
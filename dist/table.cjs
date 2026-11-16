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

// src/table/index.tsx
var table_exports = {};
__export(table_exports, {
  Table: () => Table
});
module.exports = __toCommonJS(table_exports);
var import_react = require("react");
var import_clsx2 = __toESM(require("clsx"), 1);

// src/checkbox/index.tsx
var import_checkbox = require("@base-ui/react/checkbox");
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_checkbox.Checkbox.Root,
    {
      className: (0, import_clsx.default)("awake-checkbox-root", className),
      ...props
    }
  );
}
function Indicator({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_checkbox.Checkbox.Indicator,
    {
      className: (0, import_clsx.default)("awake-checkbox-indicator", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "svg",
        {
          className: "awake-checkbox-icon",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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

// src/table/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var TableContext = (0, import_react.createContext)({ loading: false });
function Root2({
  className,
  striped,
  hoverable = true,
  loading = false,
  stickyHeader,
  searchBar,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableContext.Provider, { value: { loading }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: (0, import_clsx2.default)(
        "awake-table-wrapper",
        stickyHeader && "awake-table-wrapper--sticky"
      ),
      children: [
        searchBar,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "table",
          {
            className: (0, import_clsx2.default)(
              "awake-table",
              striped && "awake-table--striped",
              hoverable && "awake-table--hoverable",
              className
            ),
            ...props,
            children: [
              children,
              loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tbody", { className: "awake-table-skeleton-body", "aria-hidden": "true", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("tr", { className: "awake-table-skeleton-row", children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: "awake-table-skeleton-cell-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "div",
                  {
                    className: "awake-table-skeleton-cell",
                    style: { width: "55%", animationDelay: `${i * 80}ms` }
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: "awake-table-skeleton-cell-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "div",
                  {
                    className: "awake-table-skeleton-cell",
                    style: { width: "70%", animationDelay: `${i * 80 + 40}ms` }
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: "awake-table-skeleton-cell-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "div",
                  {
                    className: "awake-table-skeleton-cell",
                    style: { width: "40%", animationDelay: `${i * 80 + 20}ms` }
                  }
                ) })
              ] }, i)) })
            ]
          }
        )
      ]
    }
  ) });
}
function Head({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("thead", { className: (0, import_clsx2.default)("awake-table-head", className), ...props });
}
function Body({ className, ...props }) {
  const { loading } = (0, import_react.useContext)(TableContext);
  if (loading) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tbody", { className: (0, import_clsx2.default)("awake-table-body", className), ...props });
}
function Row({ className, selected, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "tr",
    {
      className: (0, import_clsx2.default)("awake-table-row", selected && "awake-table-row--selected", className),
      "aria-selected": selected,
      ...props
    }
  );
}
function HeaderCell({
  className,
  sortable,
  sortDirection,
  onSort,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "th",
    {
      className: (0, import_clsx2.default)(
        "awake-table-header-cell",
        sortable && "awake-table-header-cell--sortable",
        sortDirection && "awake-table-header-cell--sorted",
        className
      ),
      "aria-sort": sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : sortable ? "none" : void 0,
      onClick: sortable ? onSort : void 0,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "awake-table-header-cell-content", children: [
        children,
        sortable && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "awake-table-sort-icon", "aria-hidden": "true", children: sortDirection === "asc" ? "\u2191" : sortDirection === "desc" ? "\u2193" : "\u2195" })
      ] })
    }
  );
}
function Cell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: (0, import_clsx2.default)("awake-table-cell", className), ...props });
}
function SelectionCell({ checked, indeterminate, onChange, "aria-label": ariaLabel }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { className: "awake-table-cell awake-table-selection-cell", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Checkbox.Root,
    {
      checked: indeterminate ? "mixed" : checked,
      onCheckedChange: onChange,
      "aria-label": ariaLabel ?? "Select row",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Checkbox.Indicator, {})
    }
  ) });
}
function SelectionHeaderCell({ checked, indeterminate, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("th", { className: "awake-table-header-cell awake-table-selection-cell", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    Checkbox.Root,
    {
      checked: indeterminate ? "mixed" : checked,
      onCheckedChange: onChange,
      "aria-label": "Select all rows",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Checkbox.Indicator, {})
    }
  ) });
}
function Empty({ colSpan, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("td", { colSpan, className: "awake-table-empty", children: children ?? "No results found." }) });
}
function SearchBar({ value, onChange, placeholder = "Search\u2026", className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: (0, import_clsx2.default)("awake-table-search-bar-wrapper", className), children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      type: "search",
      value,
      onChange: (e) => onChange(e.target.value),
      placeholder,
      className: "awake-table-search-bar"
    }
  ) });
}
var Table = {
  Root: Root2,
  Head,
  Body,
  Row,
  HeaderCell,
  Cell,
  SelectionCell,
  SelectionHeaderCell,
  Empty,
  SearchBar
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Table
});
//# sourceMappingURL=table.cjs.map
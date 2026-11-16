"use client";
import {
  Checkbox
} from "./chunk-T42CPCG4.js";

// src/table/index.tsx
import { createContext, useContext } from "react";
import clsx from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
var TableContext = createContext({ loading: false });
function Root({
  className,
  striped,
  hoverable = true,
  loading = false,
  stickyHeader,
  searchBar,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TableContext.Provider, { value: { loading }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: clsx(
        "awake-table-wrapper",
        stickyHeader && "awake-table-wrapper--sticky"
      ),
      children: [
        searchBar,
        /* @__PURE__ */ jsxs(
          "table",
          {
            className: clsx(
              "awake-table",
              striped && "awake-table--striped",
              hoverable && "awake-table--hoverable",
              className
            ),
            ...props,
            children: [
              children,
              loading && /* @__PURE__ */ jsx("tbody", { className: "awake-table-skeleton-body", "aria-hidden": "true", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxs("tr", { className: "awake-table-skeleton-row", children: [
                /* @__PURE__ */ jsx("td", { className: "awake-table-skeleton-cell-wrapper", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "awake-table-skeleton-cell",
                    style: { width: "55%", animationDelay: `${i * 80}ms` }
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { className: "awake-table-skeleton-cell-wrapper", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "awake-table-skeleton-cell",
                    style: { width: "70%", animationDelay: `${i * 80 + 40}ms` }
                  }
                ) }),
                /* @__PURE__ */ jsx("td", { className: "awake-table-skeleton-cell-wrapper", children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx("thead", { className: clsx("awake-table-head", className), ...props });
}
function Body({ className, ...props }) {
  const { loading } = useContext(TableContext);
  if (loading) return null;
  return /* @__PURE__ */ jsx("tbody", { className: clsx("awake-table-body", className), ...props });
}
function Row({ className, selected, ...props }) {
  return /* @__PURE__ */ jsx(
    "tr",
    {
      className: clsx("awake-table-row", selected && "awake-table-row--selected", className),
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
  return /* @__PURE__ */ jsx(
    "th",
    {
      className: clsx(
        "awake-table-header-cell",
        sortable && "awake-table-header-cell--sortable",
        sortDirection && "awake-table-header-cell--sorted",
        className
      ),
      "aria-sort": sortDirection === "asc" ? "ascending" : sortDirection === "desc" ? "descending" : sortable ? "none" : void 0,
      onClick: sortable ? onSort : void 0,
      ...props,
      children: /* @__PURE__ */ jsxs("span", { className: "awake-table-header-cell-content", children: [
        children,
        sortable && /* @__PURE__ */ jsx("span", { className: "awake-table-sort-icon", "aria-hidden": "true", children: sortDirection === "asc" ? "\u2191" : sortDirection === "desc" ? "\u2193" : "\u2195" })
      ] })
    }
  );
}
function Cell({ className, ...props }) {
  return /* @__PURE__ */ jsx("td", { className: clsx("awake-table-cell", className), ...props });
}
function SelectionCell({ checked, indeterminate, onChange, "aria-label": ariaLabel }) {
  return /* @__PURE__ */ jsx("td", { className: "awake-table-cell awake-table-selection-cell", children: /* @__PURE__ */ jsx(
    Checkbox.Root,
    {
      checked: indeterminate ? "mixed" : checked,
      onCheckedChange: onChange,
      "aria-label": ariaLabel ?? "Select row",
      children: /* @__PURE__ */ jsx(Checkbox.Indicator, {})
    }
  ) });
}
function SelectionHeaderCell({ checked, indeterminate, onChange }) {
  return /* @__PURE__ */ jsx("th", { className: "awake-table-header-cell awake-table-selection-cell", children: /* @__PURE__ */ jsx(
    Checkbox.Root,
    {
      checked: indeterminate ? "mixed" : checked,
      onCheckedChange: onChange,
      "aria-label": "Select all rows",
      children: /* @__PURE__ */ jsx(Checkbox.Indicator, {})
    }
  ) });
}
function Empty({ colSpan, children }) {
  return /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan, className: "awake-table-empty", children: children ?? "No results found." }) });
}
function SearchBar({ value, onChange, placeholder = "Search\u2026", className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("awake-table-search-bar-wrapper", className), children: /* @__PURE__ */ jsx(
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
  Root,
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
export {
  Table
};
//# sourceMappingURL=table.js.map
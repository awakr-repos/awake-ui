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

// src/autocomplete/index.tsx
var autocomplete_exports = {};
__export(autocomplete_exports, {
  Autocomplete: () => Autocomplete
});
module.exports = __toCommonJS(autocomplete_exports);
var import_autocomplete = require("@base-ui/react/autocomplete");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_autocomplete.Autocomplete.Root, { ...props });
}
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.InputGroup,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-input-group", className),
      ...props
    }
  );
}
function Input({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Input,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-input", className),
      ...props
    }
  );
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Trigger,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-trigger", className),
      ...props
    }
  );
}
function Clear({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Clear,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-clear", className),
      ...props
    }
  );
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_autocomplete.Autocomplete.Portal, { ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Backdrop,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-backdrop", className),
      ...props
    }
  );
}
function Positioner({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Positioner,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Popup,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-popup", className),
      ...props
    }
  );
}
function List({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.List,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-list", className),
      ...props
    }
  );
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Item,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-item", className),
      ...props
    }
  );
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Group,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-group", className),
      ...props
    }
  );
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.GroupLabel,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-group-label", className),
      ...props
    }
  );
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Separator,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-separator", className),
      ...props
    }
  );
}
function Empty({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Empty,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-empty", className),
      ...props
    }
  );
}
function Status({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_autocomplete.Autocomplete.Status,
    {
      className: (0, import_clsx.clsx)("awake-autocomplete-status", className),
      ...props
    }
  );
}
var Autocomplete = {
  Root,
  InputGroup,
  Input,
  Trigger,
  Clear,
  Portal,
  Backdrop,
  Positioner,
  Popup,
  List,
  Item,
  Group,
  GroupLabel,
  Separator,
  Empty,
  Status,
  useFilter: import_autocomplete.Autocomplete.useFilter,
  useFilteredItems: import_autocomplete.Autocomplete.useFilteredItems
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Autocomplete
});
//# sourceMappingURL=autocomplete.cjs.map
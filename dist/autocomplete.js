"use client";

// src/autocomplete/index.tsx
import { Autocomplete as BaseUIAutocomplete } from "@base-ui/react/autocomplete";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUIAutocomplete.Root, { ...props });
}
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.InputGroup,
    {
      className: clsx("awake-autocomplete-input-group", className),
      ...props
    }
  );
}
function Input({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Input,
    {
      className: clsx("awake-autocomplete-input", className),
      ...props
    }
  );
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Trigger,
    {
      className: clsx("awake-autocomplete-trigger", className),
      ...props
    }
  );
}
function Clear({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Clear,
    {
      className: clsx("awake-autocomplete-clear", className),
      ...props
    }
  );
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseUIAutocomplete.Portal, { ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Backdrop,
    {
      className: clsx("awake-autocomplete-backdrop", className),
      ...props
    }
  );
}
function Positioner({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Positioner,
    {
      className: clsx("awake-autocomplete-positioner", className),
      ...props
    }
  );
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Popup,
    {
      className: clsx("awake-autocomplete-popup", className),
      ...props
    }
  );
}
function List({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.List,
    {
      className: clsx("awake-autocomplete-list", className),
      ...props
    }
  );
}
function Item({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Item,
    {
      className: clsx("awake-autocomplete-item", className),
      ...props
    }
  );
}
function Group({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Group,
    {
      className: clsx("awake-autocomplete-group", className),
      ...props
    }
  );
}
function GroupLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.GroupLabel,
    {
      className: clsx("awake-autocomplete-group-label", className),
      ...props
    }
  );
}
function Separator({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Separator,
    {
      className: clsx("awake-autocomplete-separator", className),
      ...props
    }
  );
}
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Empty,
    {
      className: clsx("awake-autocomplete-empty", className),
      ...props
    }
  );
}
function Status({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseUIAutocomplete.Status,
    {
      className: clsx("awake-autocomplete-status", className),
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
  useFilter: BaseUIAutocomplete.useFilter,
  useFilteredItems: BaseUIAutocomplete.useFilteredItems
};
export {
  Autocomplete
};
//# sourceMappingURL=autocomplete.js.map
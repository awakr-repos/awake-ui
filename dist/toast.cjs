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

// src/toast/index.tsx
var toast_exports = {};
__export(toast_exports, {
  Toast: () => Toast,
  ToastProvider: () => ToastProvider,
  useToast: () => useToast
});
module.exports = __toCommonJS(toast_exports);
var import_react = require("react");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
var ToastContext = (0, import_react.createContext)(null);
function ToastProvider({ children }) {
  const [items, setItems] = (0, import_react.useState)([]);
  const timers = (0, import_react.useRef)({});
  const remove = (0, import_react.useCallback)((id) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);
  const toast = (0, import_react.useCallback)((options) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const duration = options.duration ?? 4e3;
    setItems((prev) => [...prev, { ...options, id }]);
    timers.current[id] = setTimeout(() => remove(id), duration);
  }, [remove]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ToastContext.Provider, { value: { toast }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "awake-toast-region", role: "region", "aria-live": "polite", "aria-label": "Notifica\xE7\xF5es", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: (0, import_clsx.clsx)("awake-toast", item.variant && `awake-toast--${item.variant}`),
        role: "status",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-toast__message", children: item.message }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              className: "awake-toast__close",
              onClick: () => remove(item.id),
              "aria-label": "Fechar notifica\xE7\xE3o",
              children: "\u2715"
            }
          )
        ]
      },
      item.id
    )) })
  ] });
}
function useToast() {
  const ctx = (0, import_react.useContext)(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}
var Toast = { Provider: ToastProvider };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toast,
  ToastProvider,
  useToast
});
//# sourceMappingURL=toast.cjs.map
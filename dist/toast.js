"use client";

// src/toast/index.tsx
import { createContext, useCallback, useContext, useRef, useState } from "react";
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
var ToastContext = createContext(null);
function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const timers = useRef({});
  const remove = useCallback((id) => {
    setItems((prev) => prev.filter((t) => t.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);
  const toast = useCallback((options) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const duration = options.duration ?? 4e3;
    setItems((prev) => [...prev, { ...options, id }]);
    timers.current[id] = setTimeout(() => remove(id), duration);
  }, [remove]);
  return /* @__PURE__ */ jsxs(ToastContext.Provider, { value: { toast }, children: [
    children,
    /* @__PURE__ */ jsx("div", { className: "awake-toast-region", role: "region", "aria-live": "polite", "aria-label": "Notifica\xE7\xF5es", children: items.map((item) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: clsx("awake-toast", item.variant && `awake-toast--${item.variant}`),
        role: "status",
        children: [
          /* @__PURE__ */ jsx("span", { className: "awake-toast__message", children: item.message }),
          /* @__PURE__ */ jsx(
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
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}
var Toast = { Provider: ToastProvider };
export {
  Toast,
  ToastProvider,
  useToast
};
//# sourceMappingURL=toast.js.map
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

// src/week-strip/index.tsx
var week_strip_exports = {};
__export(week_strip_exports, {
  WeekStrip: () => WeekStrip
});
module.exports = __toCommonJS(week_strip_exports);
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
var WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function getWeekDays(reference) {
  const start = new Date(reference);
  start.setDate(start.getDate() - start.getDay());
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return { date: d };
  });
}
function WeekStrip({ selected, today, days, onSelect, className }) {
  const todayDate = today ? new Date(today) : /* @__PURE__ */ new Date();
  const selectedDate = selected ? new Date(selected) : void 0;
  const weekDays = days ?? getWeekDays(todayDate);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.clsx)("awake-week-strip", className), role: "group", "aria-label": "Selecionar dia da semana", children: weekDays.map(({ date, label }, i) => {
    const isToday = isSameDay(date, todayDate);
    const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
    const dayNum = date.getDate();
    const dayLabel = label ?? WEEKDAYS[date.getDay()];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "button",
      {
        type: "button",
        className: (0, import_clsx.clsx)(
          "awake-week-strip__day",
          isToday && "awake-week-strip__day--today",
          isSelected && "awake-week-strip__day--selected"
        ),
        "aria-label": date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" }),
        "aria-pressed": isSelected,
        onClick: () => onSelect?.(date),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-week-strip__weekday", children: dayLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-week-strip__number", children: dayNum }),
          isToday && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "awake-week-strip__dot", "aria-hidden": "true" })
        ]
      },
      date.toISOString()
    );
  }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WeekStrip
});
//# sourceMappingURL=week-strip.cjs.map
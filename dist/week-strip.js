"use client";

// src/week-strip/index.tsx
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx("div", { className: clsx("awake-week-strip", className), role: "group", "aria-label": "Selecionar dia da semana", children: weekDays.map(({ date, label }, i) => {
    const isToday = isSameDay(date, todayDate);
    const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
    const dayNum = date.getDate();
    const dayLabel = label ?? WEEKDAYS[date.getDay()];
    return /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: clsx(
          "awake-week-strip__day",
          isToday && "awake-week-strip__day--today",
          isSelected && "awake-week-strip__day--selected"
        ),
        "aria-label": date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" }),
        "aria-pressed": isSelected,
        onClick: () => onSelect?.(date),
        children: [
          /* @__PURE__ */ jsx("span", { className: "awake-week-strip__weekday", children: dayLabel }),
          /* @__PURE__ */ jsx("span", { className: "awake-week-strip__number", children: dayNum }),
          isToday && /* @__PURE__ */ jsx("span", { className: "awake-week-strip__dot", "aria-hidden": "true" })
        ]
      },
      date.toISOString()
    );
  }) });
}
export {
  WeekStrip
};
//# sourceMappingURL=week-strip.js.map
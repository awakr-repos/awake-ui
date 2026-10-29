'use client';

import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export type WeekStripDay = {
  date: Date;
  label?: string;
};

export type WeekStripProps = {
  /** ISO string or Date of the selected day */
  selected?: Date | string;
  /** ISO string or Date of the current day (defaults to today) */
  today?: Date | string;
  /** 7 days to display. Defaults to the current week (Sun–Sat). */
  days?: WeekStripDay[];
  onSelect?: (date: Date) => void;
  className?: string;
};

const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function getWeekDays(reference: Date): WeekStripDay[] {
  const start = new Date(reference);
  start.setDate(start.getDate() - start.getDay()); // go to Sunday
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return { date: d };
  });
}

export function WeekStrip({ selected, today, days, onSelect, className }: WeekStripProps) {
  const todayDate = today ? new Date(today) : new Date();
  const selectedDate = selected ? new Date(selected) : undefined;
  const weekDays = days ?? getWeekDays(todayDate);

  return (
    <div className={clsx('awake-week-strip', className)} role="group" aria-label="Selecionar dia da semana">
      {weekDays.map(({ date, label }, i) => {
        const isToday = isSameDay(date, todayDate);
        const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
        const dayNum = date.getDate();
        const dayLabel = label ?? WEEKDAYS[date.getDay()];

        return (
          <button
            key={date.toISOString()}
            type="button"
            className={clsx(
              'awake-week-strip__day',
              isToday && 'awake-week-strip__day--today',
              isSelected && 'awake-week-strip__day--selected',
            )}
            aria-label={date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
            aria-pressed={isSelected}
            onClick={() => onSelect?.(date)}
          >
            <span className="awake-week-strip__weekday">{dayLabel}</span>
            <span className="awake-week-strip__number">{dayNum}</span>
            {isToday && <span className="awake-week-strip__dot" aria-hidden="true" />}
          </button>
        );
      })}
    </div>
  );
}

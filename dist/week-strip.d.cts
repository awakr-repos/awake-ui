import * as react from 'react';

type WeekStripDay = {
    date: Date;
    label?: string;
};
type WeekStripProps = {
    /** ISO string or Date of the selected day */
    selected?: Date | string;
    /** ISO string or Date of the current day (defaults to today) */
    today?: Date | string;
    /** 7 days to display. Defaults to the current week (Sun–Sat). */
    days?: WeekStripDay[];
    onSelect?: (date: Date) => void;
    className?: string;
};
declare function WeekStrip({ selected, today, days, onSelect, className }: WeekStripProps): react.JSX.Element;

export { WeekStrip, type WeekStripDay, type WeekStripProps };

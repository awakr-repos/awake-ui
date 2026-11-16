import * as react from 'react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type RootProps = ComponentPropsWithoutRef<'table'> & {
    striped?: boolean;
    hoverable?: boolean;
    loading?: boolean;
    stickyHeader?: boolean;
    searchBar?: ReactNode;
};
declare function Root({ className, striped, hoverable, loading, stickyHeader, searchBar, children, ...props }: RootProps): react.JSX.Element;
declare function Head({ className, ...props }: ComponentPropsWithoutRef<'thead'>): react.JSX.Element;
declare function Body({ className, ...props }: ComponentPropsWithoutRef<'tbody'>): react.JSX.Element | null;
type RowProps = ComponentPropsWithoutRef<'tr'> & {
    selected?: boolean;
};
declare function Row({ className, selected, ...props }: RowProps): react.JSX.Element;
type SortDirection = 'asc' | 'desc' | null;
type HeaderCellProps = ComponentPropsWithoutRef<'th'> & {
    sortable?: boolean;
    sortDirection?: SortDirection;
    onSort?: () => void;
};
declare function HeaderCell({ className, sortable, sortDirection, onSort, children, ...props }: HeaderCellProps): react.JSX.Element;
declare function Cell({ className, ...props }: ComponentPropsWithoutRef<'td'>): react.JSX.Element;
type SelectionCellProps = {
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
    'aria-label'?: string;
};
declare function SelectionCell({ checked, indeterminate, onChange, 'aria-label': ariaLabel }: SelectionCellProps): react.JSX.Element;
type SelectionHeaderCellProps = {
    checked?: boolean;
    indeterminate?: boolean;
    onChange?: (checked: boolean) => void;
};
declare function SelectionHeaderCell({ checked, indeterminate, onChange }: SelectionHeaderCellProps): react.JSX.Element;
type EmptyProps = {
    colSpan: number;
    children?: ReactNode;
};
declare function Empty({ colSpan, children }: EmptyProps): react.JSX.Element;
type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
};
declare function SearchBar({ value, onChange, placeholder, className }: SearchBarProps): react.JSX.Element;
declare const Table: {
    Root: typeof Root;
    Head: typeof Head;
    Body: typeof Body;
    Row: typeof Row;
    HeaderCell: typeof HeaderCell;
    Cell: typeof Cell;
    SelectionCell: typeof SelectionCell;
    SelectionHeaderCell: typeof SelectionHeaderCell;
    Empty: typeof Empty;
    SearchBar: typeof SearchBar;
};

export { Table };

'use client';

import { ComponentPropsWithoutRef, ReactNode, createContext, useContext } from 'react';
import clsx from 'clsx';
import { Checkbox } from '../checkbox';
import './styles.css';

// ─── Context ─────────────────────────────────────────────────────────────────

const TableContext = createContext<{ loading: boolean }>({ loading: false });

// ─── Root ────────────────────────────────────────────────────────────────────

type RootProps = ComponentPropsWithoutRef<'table'> & {
  striped?: boolean;
  hoverable?: boolean;
  loading?: boolean;
  stickyHeader?: boolean;
  searchBar?: ReactNode;
};

function Root({
  className,
  striped,
  hoverable = true,
  loading = false,
  stickyHeader,
  searchBar,
  children,
  ...props
}: RootProps) {
  return (
    <TableContext.Provider value={{ loading }}>
      <div
        className={clsx(
          'awake-table-wrapper',
          stickyHeader && 'awake-table-wrapper--sticky',
        )}
      >
        {searchBar}
        <table
          className={clsx(
            'awake-table',
            striped && 'awake-table--striped',
            hoverable && 'awake-table--hoverable',
            className,
          )}
          {...props}
        >
          {children}
          {loading && (
            <tbody className="awake-table-skeleton-body" aria-hidden="true">
              {Array.from({ length: 4 }).map((_, i) => (
                <tr key={i} className="awake-table-skeleton-row">
                  <td className="awake-table-skeleton-cell-wrapper">
                    <div
                      className="awake-table-skeleton-cell"
                      style={{ width: '55%', animationDelay: `${i * 80}ms` }}
                    />
                  </td>
                  <td className="awake-table-skeleton-cell-wrapper">
                    <div
                      className="awake-table-skeleton-cell"
                      style={{ width: '70%', animationDelay: `${i * 80 + 40}ms` }}
                    />
                  </td>
                  <td className="awake-table-skeleton-cell-wrapper">
                    <div
                      className="awake-table-skeleton-cell"
                      style={{ width: '40%', animationDelay: `${i * 80 + 20}ms` }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </TableContext.Provider>
  );
}

// ─── Head ────────────────────────────────────────────────────────────────────

function Head({ className, ...props }: ComponentPropsWithoutRef<'thead'>) {
  return <thead className={clsx('awake-table-head', className)} {...props} />;
}

// ─── Body ────────────────────────────────────────────────────────────────────

function Body({ className, ...props }: ComponentPropsWithoutRef<'tbody'>) {
  const { loading } = useContext(TableContext);
  if (loading) return null;
  return <tbody className={clsx('awake-table-body', className)} {...props} />;
}

// ─── Row ─────────────────────────────────────────────────────────────────────

type RowProps = ComponentPropsWithoutRef<'tr'> & {
  selected?: boolean;
};

function Row({ className, selected, ...props }: RowProps) {
  return (
    <tr
      className={clsx('awake-table-row', selected && 'awake-table-row--selected', className)}
      aria-selected={selected}
      {...props}
    />
  );
}

// ─── HeaderCell ──────────────────────────────────────────────────────────────

type SortDirection = 'asc' | 'desc' | null;

type HeaderCellProps = ComponentPropsWithoutRef<'th'> & {
  sortable?: boolean;
  sortDirection?: SortDirection;
  onSort?: () => void;
};

function HeaderCell({
  className,
  sortable,
  sortDirection,
  onSort,
  children,
  ...props
}: HeaderCellProps) {
  return (
    <th
      className={clsx(
        'awake-table-header-cell',
        sortable && 'awake-table-header-cell--sortable',
        sortDirection && 'awake-table-header-cell--sorted',
        className,
      )}
      aria-sort={
        sortDirection === 'asc'
          ? 'ascending'
          : sortDirection === 'desc'
          ? 'descending'
          : sortable
          ? 'none'
          : undefined
      }
      onClick={sortable ? onSort : undefined}
      {...props}
    >
      <span className="awake-table-header-cell-content">
        {children}
        {sortable && (
          <span className="awake-table-sort-icon" aria-hidden="true">
            {sortDirection === 'asc' ? '↑' : sortDirection === 'desc' ? '↓' : '↕'}
          </span>
        )}
      </span>
    </th>
  );
}

// ─── Cell ────────────────────────────────────────────────────────────────────

function Cell({ className, ...props }: ComponentPropsWithoutRef<'td'>) {
  return <td className={clsx('awake-table-cell', className)} {...props} />;
}

// ─── SelectionCell ───────────────────────────────────────────────────────────

type SelectionCellProps = {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  'aria-label'?: string;
};

function SelectionCell({ checked, indeterminate, onChange, 'aria-label': ariaLabel }: SelectionCellProps) {
  return (
    <td className="awake-table-cell awake-table-selection-cell">
      <Checkbox.Root
        checked={indeterminate ? 'mixed' : checked}
        onCheckedChange={onChange}
        aria-label={ariaLabel ?? 'Select row'}
      >
        <Checkbox.Indicator />
      </Checkbox.Root>
    </td>
  );
}

// ─── SelectionHeaderCell ─────────────────────────────────────────────────────

type SelectionHeaderCellProps = {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
};

function SelectionHeaderCell({ checked, indeterminate, onChange }: SelectionHeaderCellProps) {
  return (
    <th className="awake-table-header-cell awake-table-selection-cell">
      <Checkbox.Root
        checked={indeterminate ? 'mixed' : checked}
        onCheckedChange={onChange}
        aria-label="Select all rows"
      >
        <Checkbox.Indicator />
      </Checkbox.Root>
    </th>
  );
}

// ─── Empty ───────────────────────────────────────────────────────────────────

type EmptyProps = {
  colSpan: number;
  children?: ReactNode;
};

function Empty({ colSpan, children }: EmptyProps) {
  return (
    <tr>
      <td colSpan={colSpan} className="awake-table-empty">
        {children ?? 'No results found.'}
      </td>
    </tr>
  );
}

// ─── SearchBar ───────────────────────────────────────────────────────────────

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

function SearchBar({ value, onChange, placeholder = 'Search…', className }: SearchBarProps) {
  return (
    <div className={clsx('awake-table-search-bar-wrapper', className)}>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="awake-table-search-bar"
      />
    </div>
  );
}

// ─── Export ──────────────────────────────────────────────────────────────────

export const Table = {
  Root,
  Head,
  Body,
  Row,
  HeaderCell,
  Cell,
  SelectionCell,
  SelectionHeaderCell,
  Empty,
  SearchBar,
};

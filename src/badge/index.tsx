import { ReactNode } from 'react';
import { clsx } from 'clsx';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={clsx('awake-badge', `awake-badge--${variant}`, className)}>
      {children}
    </span>
  );
}

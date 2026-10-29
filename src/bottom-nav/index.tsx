'use client';

import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { clsx } from 'clsx';

export type BottomNavProps = ComponentPropsWithoutRef<'nav'> & {
  children: ReactNode;
  className?: string;
};

export type BottomNavItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

function BottomNavRoot({ children, className, ...props }: BottomNavProps) {
  return (
    <nav className={clsx('awake-bottom-nav', className)} {...props}>
      {children}
    </nav>
  );
}

function BottomNavItem({ icon, label, active, onClick, className }: BottomNavItemProps) {
  return (
    <button
      type="button"
      className={clsx('awake-bottom-nav__item', active && 'awake-bottom-nav__item--active', className)}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
    >
      <span className="awake-bottom-nav__icon" aria-hidden="true">{icon}</span>
      <span className="awake-bottom-nav__label">{label}</span>
    </button>
  );
}

export const BottomNav = {
  Root: BottomNavRoot,
  Item: BottomNavItem,
};

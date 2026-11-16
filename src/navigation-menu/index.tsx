'use client';

import { NavigationMenu as BaseNav } from '@base-ui/react/navigation-menu';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root({ className, ...props }: ComponentProps<typeof BaseNav.Root>) {
  return <BaseNav.Root className={clsx('awake-nav-root', className)} {...props} />;
}

function List({ className, ...props }: ComponentProps<typeof BaseNav.List>) {
  return <BaseNav.List className={clsx('awake-nav-list', className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseNav.Item>) {
  return <BaseNav.Item className={clsx('awake-nav-item', className)} {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseNav.Trigger>) {
  return <BaseNav.Trigger className={clsx('awake-nav-trigger', className)} {...props} />;
}

function Link({ className, ...props }: ComponentProps<typeof BaseNav.Link>) {
  return <BaseNav.Link className={clsx('awake-nav-link', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BaseNav.Portal>) {
  return <BaseNav.Portal {...props} />;
}

function Positioner({ className, ...props }: ComponentProps<typeof BaseNav.Positioner>) {
  return <BaseNav.Positioner className={clsx('awake-nav-positioner', className)} {...props} />;
}

function Popup({ className, ...props }: ComponentProps<typeof BaseNav.Popup>) {
  return <BaseNav.Popup className={clsx('awake-nav-popup', className)} {...props} />;
}

function Viewport({ className, ...props }: ComponentProps<typeof BaseNav.Viewport>) {
  return <BaseNav.Viewport className={clsx('awake-nav-viewport', className)} {...props} />;
}

function Arrow({ className, ...props }: ComponentProps<typeof BaseNav.Arrow>) {
  return <BaseNav.Arrow className={clsx('awake-nav-arrow', className)} {...props} />;
}

export const NavigationMenu = { Root, List, Item, Trigger, Link, Portal, Positioner, Popup, Viewport, Arrow };

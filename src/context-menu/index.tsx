'use client';

import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root(props: ComponentProps<typeof BaseContextMenu.Root>) {
  return <BaseContextMenu.Root {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseContextMenu.Trigger>) {
  return <BaseContextMenu.Trigger className={clsx('awake-context-menu-trigger', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BaseContextMenu.Portal>) {
  return <BaseContextMenu.Portal {...props} />;
}

function Positioner({ className, ...props }: ComponentProps<typeof BaseContextMenu.Positioner>) {
  return (
    <BaseContextMenu.Positioner
      className={clsx('awake-context-menu-positioner', className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseContextMenu.Popup>) {
  return <BaseContextMenu.Popup className={clsx('awake-context-menu-popup', className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseContextMenu.Item>) {
  return <BaseContextMenu.Item className={clsx('awake-context-menu-item', className)} {...props} />;
}

function Separator({ className, ...props }: ComponentProps<typeof BaseContextMenu.Separator>) {
  return <BaseContextMenu.Separator className={clsx('awake-context-menu-separator', className)} {...props} />;
}

function Group({ className, ...props }: ComponentProps<typeof BaseContextMenu.Group>) {
  return <BaseContextMenu.Group className={clsx('awake-context-menu-group', className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseContextMenu.GroupLabel>) {
  return <BaseContextMenu.GroupLabel className={clsx('awake-context-menu-group-label', className)} {...props} />;
}

export const ContextMenu = { Root, Trigger, Portal, Positioner, Popup, Item, Separator, Group, GroupLabel };

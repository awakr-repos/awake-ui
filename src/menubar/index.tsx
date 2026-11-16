'use client';

import { Menubar as BaseMenubar } from '@base-ui/react/menubar';
import { Menu as BaseMenu } from '@base-ui/react/menu';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root({ className, ...props }: ComponentProps<typeof BaseMenubar>) {
  return <BaseMenubar className={clsx('awake-menubar', className)} {...props} />;
}

function Menu(props: ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseMenu.Trigger>) {
  return <BaseMenu.Trigger className={clsx('awake-menubar-trigger', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal {...props} />;
}

function Positioner({ className, sideOffset = 4, ...props }: ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Positioner
      sideOffset={sideOffset}
      className={clsx('awake-menubar-positioner', className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseMenu.Popup>) {
  return <BaseMenu.Popup className={clsx('awake-menubar-popup', className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseMenu.Item>) {
  return <BaseMenu.Item className={clsx('awake-menubar-item', className)} {...props} />;
}

function Separator({ className, ...props }: ComponentProps<typeof BaseMenu.Separator>) {
  return <BaseMenu.Separator className={clsx('awake-menubar-separator', className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseMenu.GroupLabel>) {
  return <BaseMenu.GroupLabel className={clsx('awake-menubar-group-label', className)} {...props} />;
}

export const Menubar = { Root, Menu, Trigger, Portal, Positioner, Popup, Item, Separator, GroupLabel };

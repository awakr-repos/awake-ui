'use client';

import { Menu as BaseMenu } from '@base-ui/react/menu';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root(props: ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseMenu.Trigger>) {
  return <BaseMenu.Trigger className={clsx('awake-menu-trigger', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal {...props} />;
}

function Positioner({ className, sideOffset = 4, ...props }: ComponentProps<typeof BaseMenu.Positioner>) {
  return (
    <BaseMenu.Positioner
      sideOffset={sideOffset}
      className={clsx('awake-menu-positioner', className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseMenu.Popup>) {
  return <BaseMenu.Popup className={clsx('awake-menu-popup', className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseMenu.Item>) {
  return <BaseMenu.Item className={clsx('awake-menu-item', className)} {...props} />;
}

function CheckboxItem({ className, ...props }: ComponentProps<typeof BaseMenu.CheckboxItem>) {
  return <BaseMenu.CheckboxItem className={clsx('awake-menu-item', 'awake-menu-checkbox-item', className)} {...props} />;
}

function RadioGroup(props: ComponentProps<typeof BaseMenu.RadioGroup>) {
  return <BaseMenu.RadioGroup {...props} />;
}

function RadioItem({ className, ...props }: ComponentProps<typeof BaseMenu.RadioItem>) {
  return <BaseMenu.RadioItem className={clsx('awake-menu-item', 'awake-menu-radio-item', className)} {...props} />;
}

function Separator({ className, ...props }: ComponentProps<typeof BaseMenu.Separator>) {
  return <BaseMenu.Separator className={clsx('awake-menu-separator', className)} {...props} />;
}

function Group({ className, ...props }: ComponentProps<typeof BaseMenu.Group>) {
  return <BaseMenu.Group className={clsx('awake-menu-group', className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseMenu.GroupLabel>) {
  return <BaseMenu.GroupLabel className={clsx('awake-menu-group-label', className)} {...props} />;
}

function SubmenuTrigger({ className, ...props }: ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return <BaseMenu.SubmenuTrigger className={clsx('awake-menu-item', 'awake-menu-submenu-trigger', className)} {...props} />;
}

export const Menu = {
  Root, Trigger, Portal, Positioner, Popup, Item, CheckboxItem,
  RadioGroup, RadioItem, Separator, Group, GroupLabel, SubmenuTrigger,
};

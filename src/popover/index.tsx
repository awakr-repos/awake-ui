'use client';

import { Popover as BasePopover } from '@base-ui/react/popover';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root(props: ComponentProps<typeof BasePopover.Root>) {
  return <BasePopover.Root {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BasePopover.Trigger>) {
  return <BasePopover.Trigger className={clsx('awake-popover-trigger', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BasePopover.Portal>) {
  return <BasePopover.Portal {...props} />;
}

function Backdrop({ className, ...props }: ComponentProps<typeof BasePopover.Backdrop>) {
  return <BasePopover.Backdrop className={clsx('awake-popover-backdrop', className)} {...props} />;
}

function Positioner({ className, sideOffset = 8, ...props }: ComponentProps<typeof BasePopover.Positioner>) {
  return (
    <BasePopover.Positioner
      sideOffset={sideOffset}
      className={clsx('awake-popover-positioner', className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BasePopover.Popup>) {
  return (
    <BasePopover.Popup
      className={clsx('awake-popover-popup', className)}
      {...props}
    />
  );
}

function Title({ className, ...props }: ComponentProps<typeof BasePopover.Title>) {
  return <BasePopover.Title className={clsx('awake-popover-title', className)} {...props} />;
}

function Description({ className, ...props }: ComponentProps<typeof BasePopover.Description>) {
  return <BasePopover.Description className={clsx('awake-popover-description', className)} {...props} />;
}

function Close({ className, ...props }: ComponentProps<typeof BasePopover.Close>) {
  return <BasePopover.Close className={clsx('awake-popover-close', className)} {...props} />;
}

function Arrow({ className, ...props }: ComponentProps<typeof BasePopover.Arrow>) {
  return <BasePopover.Arrow className={clsx('awake-popover-arrow', className)} {...props} />;
}

export const Popover = { Root, Trigger, Portal, Backdrop, Positioner, Popup, Title, Description, Close, Arrow };

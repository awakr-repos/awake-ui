'use client';

import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

type DrawerRootProps = ComponentProps<typeof BaseDialog.Root>;
function Root(props: DrawerRootProps) {
  return <BaseDialog.Root {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseDialog.Trigger>) {
  return <BaseDialog.Trigger className={clsx('awake-drawer-trigger', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BaseDialog.Portal>) {
  return <BaseDialog.Portal {...props} />;
}

function Backdrop({ className, ...props }: ComponentProps<typeof BaseDialog.Backdrop>) {
  return <BaseDialog.Backdrop className={clsx('awake-drawer-backdrop', className)} {...props} />;
}

type PopupProps = ComponentProps<typeof BaseDialog.Popup> & {
  side?: 'left' | 'right' | 'bottom' | 'top';
};

function Popup({ className, side = 'right', ...props }: PopupProps) {
  return (
    <BaseDialog.Popup
      className={clsx('awake-drawer-popup', `awake-drawer-popup--${side}`, className)}
      {...props}
    />
  );
}

function Title({ className, ...props }: ComponentProps<typeof BaseDialog.Title>) {
  return <BaseDialog.Title className={clsx('awake-drawer-title', className)} {...props} />;
}

function Description({ className, ...props }: ComponentProps<typeof BaseDialog.Description>) {
  return <BaseDialog.Description className={clsx('awake-drawer-description', className)} {...props} />;
}

function Close({ className, ...props }: ComponentProps<typeof BaseDialog.Close>) {
  return <BaseDialog.Close className={clsx('awake-drawer-close', className)} {...props} />;
}

export const Drawer = { Root, Trigger, Portal, Backdrop, Popup, Title, Description, Close };

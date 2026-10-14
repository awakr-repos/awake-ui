'use client';

import { Dialog as BaseUIDialog } from '@base-ui/react/dialog';
import { ComponentProps } from 'react';
import { clsx } from 'clsx';

function Root(props: ComponentProps<typeof BaseUIDialog.Root>) {
  return <BaseUIDialog.Root {...props} />;
}

/**
 * Dialog.Trigger has no visual style of its own — appearance is up to the consumer.
 * Use the render prop to pass a Button or any other element:
 *
 * @example
 * <Dialog.Trigger render={<Button>Open</Button>} />
 * <Dialog.Trigger render={<Button variant="secondary">Open</Button>} />
 * <Dialog.Trigger>Open</Dialog.Trigger>  // unstyled, behavior only
 */
function Trigger({ className, ...props }: ComponentProps<typeof BaseUIDialog.Trigger>) {
  return <BaseUIDialog.Trigger className={clsx(className)} {...props} />;
}

function Backdrop({ className, ...props }: ComponentProps<typeof BaseUIDialog.Backdrop>) {
  return <BaseUIDialog.Backdrop className={clsx('awake-dialog-backdrop', className)} {...props} />;
}

function Popup({ className, ...props }: ComponentProps<typeof BaseUIDialog.Popup>) {
  return <BaseUIDialog.Popup className={clsx('awake-dialog-popup', className)} {...props} />;
}

function Title({ className, ...props }: ComponentProps<typeof BaseUIDialog.Title>) {
  return <BaseUIDialog.Title className={clsx('awake-dialog-title', className)} {...props} />;
}

function Description({ className, ...props }: ComponentProps<typeof BaseUIDialog.Description>) {
  return <BaseUIDialog.Description className={clsx('awake-dialog-description', className)} {...props} />;
}

function Close({ className, ...props }: ComponentProps<typeof BaseUIDialog.Close>) {
  return <BaseUIDialog.Close className={clsx('awake-dialog-close', className)} {...props} />;
}

export const Dialog = {
  Root,
  Trigger,
  Portal: BaseUIDialog.Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close,
};

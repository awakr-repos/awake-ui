'use client';

import { Switch as BaseUISwitch } from '@base-ui/react/switch';
import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

function Root({ className, ...props }: ComponentPropsWithoutRef<typeof BaseUISwitch.Root>) {
  return <BaseUISwitch.Root className={clsx('awake-switch-root', className)} {...props} />;
}

function Thumb({ className, ...props }: ComponentPropsWithoutRef<typeof BaseUISwitch.Thumb>) {
  return <BaseUISwitch.Thumb className={clsx('awake-switch-thumb', className)} {...props} />;
}

export const Switch = { Root, Thumb };

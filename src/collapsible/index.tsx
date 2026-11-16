'use client';

import { Collapsible as BaseCollapsible } from '@base-ui/react/collapsible';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root({ className, ...props }: ComponentProps<typeof BaseCollapsible.Root>) {
  return (
    <BaseCollapsible.Root
      className={clsx('awake-collapsible-root', className)}
      {...props}
    />
  );
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseCollapsible.Trigger>) {
  return (
    <BaseCollapsible.Trigger
      className={clsx('awake-collapsible-trigger', className)}
      {...props}
    />
  );
}

function Panel({ className, ...props }: ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel
      className={clsx('awake-collapsible-panel', className)}
      {...props}
    />
  );
}

export const Collapsible = { Root, Trigger, Panel };

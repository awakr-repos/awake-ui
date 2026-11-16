'use client';

import { ScrollArea as BaseScrollArea } from '@base-ui/react/scroll-area';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root({ className, ...props }: ComponentProps<typeof BaseScrollArea.Root>) {
  return (
    <BaseScrollArea.Root
      className={clsx('awake-scroll-area', className)}
      {...props}
    />
  );
}

function Viewport({ className, ...props }: ComponentProps<typeof BaseScrollArea.Viewport>) {
  return (
    <BaseScrollArea.Viewport
      className={clsx('awake-scroll-area-viewport', className)}
      {...props}
    />
  );
}

function Scrollbar({ className, orientation = 'vertical', ...props }: ComponentProps<typeof BaseScrollArea.Scrollbar>) {
  return (
    <BaseScrollArea.Scrollbar
      orientation={orientation}
      className={clsx(
        'awake-scroll-area-scrollbar',
        orientation === 'horizontal' && 'awake-scroll-area-scrollbar--horizontal',
        className,
      )}
      {...props}
    >
      <BaseScrollArea.Thumb className="awake-scroll-area-thumb" />
    </BaseScrollArea.Scrollbar>
  );
}

export const ScrollArea = { Root, Viewport, Scrollbar };

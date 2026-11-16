'use client';

import { PreviewCard as BasePreviewCard } from '@base-ui/react/preview-card';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root(props: ComponentProps<typeof BasePreviewCard.Root>) {
  return <BasePreviewCard.Root {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BasePreviewCard.Trigger>) {
  return <BasePreviewCard.Trigger className={clsx('awake-preview-card-trigger', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BasePreviewCard.Portal>) {
  return <BasePreviewCard.Portal {...props} />;
}

function Positioner({ className, sideOffset = 8, ...props }: ComponentProps<typeof BasePreviewCard.Positioner>) {
  return (
    <BasePreviewCard.Positioner
      sideOffset={sideOffset}
      className={clsx('awake-preview-card-positioner', className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BasePreviewCard.Popup>) {
  return (
    <BasePreviewCard.Popup
      className={clsx('awake-preview-card-popup', className)}
      {...props}
    />
  );
}

function Arrow({ className, ...props }: ComponentProps<typeof BasePreviewCard.Arrow>) {
  return <BasePreviewCard.Arrow className={clsx('awake-preview-card-arrow', className)} {...props} />;
}

export const PreviewCard = { Root, Trigger, Portal, Positioner, Popup, Arrow };

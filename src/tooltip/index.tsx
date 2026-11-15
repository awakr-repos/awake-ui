'use client';

import { Tooltip as BaseUITooltip } from '@base-ui/react/tooltip';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';

function Provider(props: ComponentProps<typeof BaseUITooltip.Provider>) {
  return <BaseUITooltip.Provider {...props} />;
}

function Root(props: ComponentProps<typeof BaseUITooltip.Root>) {
  return <BaseUITooltip.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof BaseUITooltip.Trigger>) {
  return <BaseUITooltip.Trigger {...props} className={clsx('awake-tooltip-trigger', props.className)} />;
}

function Positioner(props: ComponentProps<typeof BaseUITooltip.Positioner>) {
  return <BaseUITooltip.Positioner {...props} className={clsx('awake-tooltip-positioner', props.className)} />;
}

function Portal(props: ComponentProps<typeof BaseUITooltip.Portal>) {
  return <BaseUITooltip.Portal {...props} />;
}

function Popup(props: ComponentProps<typeof BaseUITooltip.Popup>) {
  return <BaseUITooltip.Popup {...props} className={clsx('awake-tooltip-popup', props.className)} />;
}

function Arrow(props: ComponentProps<typeof BaseUITooltip.Arrow>) {
  return <BaseUITooltip.Arrow {...props} className={clsx('awake-tooltip-arrow', props.className)} />;
}

function Viewport(props: ComponentProps<typeof BaseUITooltip.Viewport>) {
  return <BaseUITooltip.Viewport {...props} />;
}

export const Tooltip = {
  Provider,
  Root,
  Trigger,
  Positioner,
  Portal,
  Popup,
  Arrow,
  Viewport,
};
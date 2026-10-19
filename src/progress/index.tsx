'use client';

import { Progress as BaseUIProgress } from '@base-ui/react/progress';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';
import './styles.css';

function Root(props: ComponentProps<typeof BaseUIProgress.Root>) {
  return (
    <BaseUIProgress.Root
      {...props}
      className={clsx('awake-progress-root', props.className)}
    />
  );
}

function Track(props: ComponentProps<typeof BaseUIProgress.Track>) {
  return (
    <BaseUIProgress.Track
      {...props}
      className={clsx('awake-progress-track', props.className)}
    />
  );
}

function Indicator(props: ComponentProps<typeof BaseUIProgress.Indicator>) {
  return (
    <BaseUIProgress.Indicator
      {...props}
      className={clsx('awake-progress-indicator', props.className)}
    />
  );
}

function Value(props: ComponentProps<typeof BaseUIProgress.Value>) {
  return (
    <BaseUIProgress.Value
      {...props}
      className={clsx('awake-progress-value', props.className)}
    />
  );
}

function Label(props: ComponentProps<typeof BaseUIProgress.Label>) {
  return (
    <BaseUIProgress.Label
      {...props}
      className={clsx('awake-progress-label', props.className)}
    />
  );
}

export const Progress = { Root, Track, Indicator, Value, Label };

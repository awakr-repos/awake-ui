'use client';

import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import { ToggleGroup as BaseToggleGroup } from '@base-ui/react/toggle-group';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

type ToggleProps = ComponentProps<typeof BaseToggle> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
};

function Root({ className, size = 'md', variant = 'default', ...props }: ToggleProps) {
  return (
    <BaseToggle
      className={clsx(
        'awake-toggle',
        `awake-toggle--${size}`,
        `awake-toggle--${variant}`,
        className,
      )}
      {...props}
    />
  );
}

type GroupProps = ComponentProps<typeof BaseToggleGroup> & {
  size?: 'sm' | 'md' | 'lg';
};

function Group({ className, size = 'md', ...props }: GroupProps) {
  return (
    <BaseToggleGroup
      className={clsx('awake-toggle-group', `awake-toggle-group--${size}`, className)}
      {...props}
    />
  );
}

export const Toggle = { Root, Group };

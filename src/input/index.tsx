'use client';

import { Input as BaseInput } from '@base-ui/react/input';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

type InputProps = Omit<ComponentProps<typeof BaseInput>, 'size'> & {
  size?: 'sm' | 'md' | 'lg';
};

export function Input({ className, size = 'md', ...props }: InputProps) {
  return (
    <BaseInput
      className={clsx(
        'awake-input',
        size === 'sm' && 'awake-input--sm',
        size === 'lg' && 'awake-input--lg',
        className,
      )}
      {...props}
    />
  );
}

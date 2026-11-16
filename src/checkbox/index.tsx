'use client';

import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import React from 'react';
import clsx from 'clsx';
import './styles.css';

type RootProps = Omit<React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>, 'checked'> & {
  checked?: boolean | 'mixed';
  className?: string;
};

function Root({ className, ...props }: RootProps) {
  return (
    <BaseCheckbox.Root
      className={clsx('awake-checkbox-root', className)}
      {...(props as React.ComponentPropsWithoutRef<typeof BaseCheckbox.Root>)}
    />
  );
}

function Indicator({ className, ...props }: React.ComponentPropsWithoutRef<typeof BaseCheckbox.Indicator> & { className?: string }) {
  return (
    <BaseCheckbox.Indicator
      className={clsx('awake-checkbox-indicator', className)}
      {...props}
    >
      <svg
        className="awake-checkbox-icon"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 6l3 3 5-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </BaseCheckbox.Indicator>
  );
}

export const Checkbox = { Root, Indicator };

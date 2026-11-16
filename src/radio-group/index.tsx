'use client';

import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group';
import { Radio as BaseRadio } from '@base-ui/react/radio';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root({ className, ...props }: ComponentProps<typeof BaseRadioGroup>) {
  return (
    <BaseRadioGroup
      className={clsx('awake-radio-group', className)}
      {...props}
    />
  );
}

function Item({ className, ...props }: ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      className={clsx('awake-radio', className)}
      {...props}
    >
      <BaseRadio.Indicator className="awake-radio-indicator" />
    </BaseRadio.Root>
  );
}

export const RadioGroup = { Root, Item };

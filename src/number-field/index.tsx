'use client';

import { NumberField as BaseUINumberField } from '@base-ui/react/number-field';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';
import './styles.css';

function Root(props: ComponentProps<typeof BaseUINumberField.Root>) {
  return <BaseUINumberField.Root {...props} className={clsx('awake-number-field-root', props.className)} />;
}

function Group(props: ComponentProps<typeof BaseUINumberField.Group>) {
  return <BaseUINumberField.Group {...props} className={clsx('awake-number-field-group', props.className)} />;
}

function Input(props: ComponentProps<typeof BaseUINumberField.Input>) {
  return <BaseUINumberField.Input {...props} className={clsx('awake-number-field-input', props.className)} />;
}

function Increment(props: ComponentProps<typeof BaseUINumberField.Increment>) {
  return <BaseUINumberField.Increment {...props} className={clsx('awake-number-field-button awake-number-field-increment', props.className)} />;
}

function Decrement(props: ComponentProps<typeof BaseUINumberField.Decrement>) {
  return <BaseUINumberField.Decrement {...props} className={clsx('awake-number-field-button awake-number-field-decrement', props.className)} />;
}

function ScrubArea(props: ComponentProps<typeof BaseUINumberField.ScrubArea>) {
  return <BaseUINumberField.ScrubArea {...props} className={clsx('awake-number-field-scrub-area', props.className)} />;
}

function ScrubAreaCursor(props: ComponentProps<typeof BaseUINumberField.ScrubAreaCursor>) {
  return <BaseUINumberField.ScrubAreaCursor {...props} className={clsx('awake-number-field-scrub-cursor', props.className)} />;
}

export const NumberField = { Root, Group, Input, Increment, Decrement, ScrubArea, ScrubAreaCursor };

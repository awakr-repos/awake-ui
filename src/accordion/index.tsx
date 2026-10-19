'use client';

import { Accordion as BaseUIAccordion } from '@base-ui/react/accordion';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';
import './styles.css';

function Root(props: ComponentProps<typeof BaseUIAccordion.Root>) {
  return (
    <BaseUIAccordion.Root
      {...props}
      className={clsx('awake-accordion-root', props.className)}
    />
  );
}

function Item(props: ComponentProps<typeof BaseUIAccordion.Item>) {
  return (
    <BaseUIAccordion.Item
      {...props}
      className={clsx('awake-accordion-item', props.className)}
    />
  );
}

function Header(props: ComponentProps<typeof BaseUIAccordion.Header>) {
  return (
    <BaseUIAccordion.Header
      {...props}
      className={clsx('awake-accordion-header', props.className)}
    />
  );
}

function Trigger(props: ComponentProps<typeof BaseUIAccordion.Trigger>) {
  return (
    <BaseUIAccordion.Trigger
      {...props}
      className={clsx('awake-accordion-trigger', props.className)}
    />
  );
}

function Panel(props: ComponentProps<typeof BaseUIAccordion.Panel>) {
  return (
    <BaseUIAccordion.Panel
      {...props}
      className={clsx('awake-accordion-panel', props.className)}
    />
  );
}

export const Accordion = { Root, Item, Header, Trigger, Panel };

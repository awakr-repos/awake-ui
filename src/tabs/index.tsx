'use client';

import { Tabs as BaseUITabs } from '@base-ui/react/tabs';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';
import './styles.css';

function Root(props: ComponentProps<typeof BaseUITabs.Root>) {
  return (
    <BaseUITabs.Root
      {...props}
      className={clsx('awake-tabs-root', props.className)}
    />
  );
}

function List(props: ComponentProps<typeof BaseUITabs.List>) {
  return (
    <BaseUITabs.List
      {...props}
      className={clsx('awake-tabs-list', props.className)}
    />
  );
}

function Tab(props: ComponentProps<typeof BaseUITabs.Tab>) {
  return (
    <BaseUITabs.Tab
      {...props}
      className={clsx('awake-tabs-tab', props.className)}
    />
  );
}

function Panel(props: ComponentProps<typeof BaseUITabs.Panel>) {
  return (
    <BaseUITabs.Panel
      {...props}
      className={clsx('awake-tabs-panel', props.className)}
    />
  );
}

function Indicator(props: ComponentProps<typeof BaseUITabs.Indicator>) {
  return (
    <BaseUITabs.Indicator
      {...props}
      className={clsx('awake-tabs-indicator', props.className)}
    />
  );
}

export const Tabs = { Root, List, Tab, Panel, Indicator };

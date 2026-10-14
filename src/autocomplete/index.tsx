'use client';

import { Autocomplete as BaseUIAutocomplete } from '@base-ui/react/autocomplete';
import { clsx } from 'clsx';
import { ComponentProps } from 'react';
import './styles.css';

function Root(props: ComponentProps<typeof BaseUIAutocomplete.Root>) {
  return <BaseUIAutocomplete.Root {...props} />;
}

function InputGroup({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.InputGroup>) {
  return (
    <BaseUIAutocomplete.InputGroup
      className={clsx('awake-autocomplete-input-group', className)}
      {...props}
    />
  );
}

function Input({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Input>) {
  return (
    <BaseUIAutocomplete.Input
      className={clsx('awake-autocomplete-input', className)}
      {...props}
    />
  );
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Trigger>) {
  return (
    <BaseUIAutocomplete.Trigger
      className={clsx('awake-autocomplete-trigger', className)}
      {...props}
    />
  );
}

function Clear({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Clear>) {
  return (
    <BaseUIAutocomplete.Clear
      className={clsx('awake-autocomplete-clear', className)}
      {...props}
    />
  );
}

function Portal(props: ComponentProps<typeof BaseUIAutocomplete.Portal>) {
  return <BaseUIAutocomplete.Portal {...props} />;
}

function Backdrop({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Backdrop>) {
  return (
    <BaseUIAutocomplete.Backdrop
      className={clsx('awake-autocomplete-backdrop', className)}
      {...props}
    />
  );
}

function Positioner({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Positioner>) {
  return (
    <BaseUIAutocomplete.Positioner
      className={clsx('awake-autocomplete-positioner', className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Popup>) {
  return (
    <BaseUIAutocomplete.Popup
      className={clsx('awake-autocomplete-popup', className)}
      {...props}
    />
  );
}

function List({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.List>) {
  return (
    <BaseUIAutocomplete.List
      className={clsx('awake-autocomplete-list', className)}
      {...props}
    />
  );
}

function Item({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Item>) {
  return (
    <BaseUIAutocomplete.Item
      className={clsx('awake-autocomplete-item', className)}
      {...props}
    />
  );
}

function Group({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Group>) {
  return (
    <BaseUIAutocomplete.Group
      className={clsx('awake-autocomplete-group', className)}
      {...props}
    />
  );
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.GroupLabel>) {
  return (
    <BaseUIAutocomplete.GroupLabel
      className={clsx('awake-autocomplete-group-label', className)}
      {...props}
    />
  );
}

function Separator({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Separator>) {
  return (
    <BaseUIAutocomplete.Separator
      className={clsx('awake-autocomplete-separator', className)}
      {...props}
    />
  );
}

function Empty({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Empty>) {
  return (
    <BaseUIAutocomplete.Empty
      className={clsx('awake-autocomplete-empty', className)}
      {...props}
    />
  );
}

function Status({ className, ...props }: ComponentProps<typeof BaseUIAutocomplete.Status>) {
  return (
    <BaseUIAutocomplete.Status
      className={clsx('awake-autocomplete-status', className)}
      {...props}
    />
  );
}

export const Autocomplete = {
  Root,
  InputGroup,
  Input,
  Trigger,
  Clear,
  Portal,
  Backdrop,
  Positioner,
  Popup,
  List,
  Item,
  Group,
  GroupLabel,
  Separator,
  Empty,
  Status,
  useFilter: BaseUIAutocomplete.useFilter,
  useFilteredItems: BaseUIAutocomplete.useFilteredItems,
};

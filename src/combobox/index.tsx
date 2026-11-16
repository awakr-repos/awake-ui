'use client';

import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

function Root(props: ComponentProps<typeof BaseCombobox.Root>) {
  return <BaseCombobox.Root {...props} />;
}

function InputGroup({ className, ...props }: ComponentProps<typeof BaseCombobox.InputGroup>) {
  return <BaseCombobox.InputGroup className={clsx('awake-combobox-input-wrapper', className)} {...props} />;
}

/** @deprecated use InputGroup instead */
const InputWrapper = InputGroup;

function Input({ className, ...props }: ComponentProps<typeof BaseCombobox.Input>) {
  return <BaseCombobox.Input className={clsx('awake-combobox-input', className)} {...props} />;
}

function Trigger({ className, ...props }: ComponentProps<typeof BaseCombobox.Trigger>) {
  return <BaseCombobox.Trigger className={clsx('awake-combobox-trigger', className)} {...props} />;
}

function Portal(props: ComponentProps<typeof BaseCombobox.Portal>) {
  return <BaseCombobox.Portal {...props} />;
}

function Positioner({ className, sideOffset = 4, ...props }: ComponentProps<typeof BaseCombobox.Positioner>) {
  return (
    <BaseCombobox.Positioner
      sideOffset={sideOffset}
      className={clsx('awake-combobox-positioner', className)}
      {...props}
    />
  );
}

function Popup({ className, ...props }: ComponentProps<typeof BaseCombobox.Popup>) {
  return <BaseCombobox.Popup className={clsx('awake-combobox-popup', className)} {...props} />;
}

function Item({ className, ...props }: ComponentProps<typeof BaseCombobox.Item>) {
  return <BaseCombobox.Item className={clsx('awake-combobox-item', className)} {...props} />;
}

function Empty({ className, ...props }: ComponentProps<typeof BaseCombobox.Empty>) {
  return <BaseCombobox.Empty className={clsx('awake-combobox-empty', className)} {...props} />;
}

function Group({ className, ...props }: ComponentProps<typeof BaseCombobox.Group>) {
  return <BaseCombobox.Group className={clsx('awake-combobox-group', className)} {...props} />;
}

function GroupLabel({ className, ...props }: ComponentProps<typeof BaseCombobox.GroupLabel>) {
  return <BaseCombobox.GroupLabel className={clsx('awake-combobox-group-label', className)} {...props} />;
}

export const Combobox = { Root, InputGroup, InputWrapper, Input, Trigger, Portal, Positioner, Popup, Item, Empty, Group, GroupLabel };

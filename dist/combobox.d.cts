import * as react from 'react';
import { ComponentProps } from 'react';
import { Combobox as Combobox$1 } from '@base-ui/react/combobox';

declare function Root(props: ComponentProps<typeof Combobox$1.Root>): react.JSX.Element;
declare function InputGroup({ className, ...props }: ComponentProps<typeof Combobox$1.InputGroup>): react.JSX.Element;
declare function Input({ className, ...props }: ComponentProps<typeof Combobox$1.Input>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof Combobox$1.Trigger>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof Combobox$1.Portal>): react.JSX.Element;
declare function Positioner({ className, sideOffset, ...props }: ComponentProps<typeof Combobox$1.Positioner>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof Combobox$1.Popup>): react.JSX.Element;
declare function Item({ className, ...props }: ComponentProps<typeof Combobox$1.Item>): react.JSX.Element;
declare function Empty({ className, ...props }: ComponentProps<typeof Combobox$1.Empty>): react.JSX.Element;
declare function Group({ className, ...props }: ComponentProps<typeof Combobox$1.Group>): react.JSX.Element;
declare function GroupLabel({ className, ...props }: ComponentProps<typeof Combobox$1.GroupLabel>): react.JSX.Element;
declare const Combobox: {
    Root: typeof Root;
    InputGroup: typeof InputGroup;
    InputWrapper: typeof InputGroup;
    Input: typeof Input;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Positioner: typeof Positioner;
    Popup: typeof Popup;
    Item: typeof Item;
    Empty: typeof Empty;
    Group: typeof Group;
    GroupLabel: typeof GroupLabel;
};

export { Combobox };

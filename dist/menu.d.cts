import * as react from 'react';
import { ComponentProps } from 'react';
import { Menu as Menu$1 } from '@base-ui/react/menu';

declare function Root(props: ComponentProps<typeof Menu$1.Root>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof Menu$1.Trigger>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof Menu$1.Portal>): react.JSX.Element;
declare function Positioner({ className, sideOffset, ...props }: ComponentProps<typeof Menu$1.Positioner>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof Menu$1.Popup>): react.JSX.Element;
declare function Item({ className, ...props }: ComponentProps<typeof Menu$1.Item>): react.JSX.Element;
declare function CheckboxItem({ className, ...props }: ComponentProps<typeof Menu$1.CheckboxItem>): react.JSX.Element;
declare function RadioGroup(props: ComponentProps<typeof Menu$1.RadioGroup>): react.JSX.Element;
declare function RadioItem({ className, ...props }: ComponentProps<typeof Menu$1.RadioItem>): react.JSX.Element;
declare function Separator({ className, ...props }: ComponentProps<typeof Menu$1.Separator>): react.JSX.Element;
declare function Group({ className, ...props }: ComponentProps<typeof Menu$1.Group>): react.JSX.Element;
declare function GroupLabel({ className, ...props }: ComponentProps<typeof Menu$1.GroupLabel>): react.JSX.Element;
declare function SubmenuTrigger({ className, ...props }: ComponentProps<typeof Menu$1.SubmenuTrigger>): react.JSX.Element;
declare const Menu: {
    Root: typeof Root;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Positioner: typeof Positioner;
    Popup: typeof Popup;
    Item: typeof Item;
    CheckboxItem: typeof CheckboxItem;
    RadioGroup: typeof RadioGroup;
    RadioItem: typeof RadioItem;
    Separator: typeof Separator;
    Group: typeof Group;
    GroupLabel: typeof GroupLabel;
    SubmenuTrigger: typeof SubmenuTrigger;
};

export { Menu };

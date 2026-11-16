import * as react from 'react';
import { ComponentProps } from 'react';
import { Menubar as Menubar$1 } from '@base-ui/react/menubar';
import { Menu as Menu$1 } from '@base-ui/react/menu';

declare function Root({ className, ...props }: ComponentProps<typeof Menubar$1>): react.JSX.Element;
declare function Menu(props: ComponentProps<typeof Menu$1.Root>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof Menu$1.Trigger>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof Menu$1.Portal>): react.JSX.Element;
declare function Positioner({ className, sideOffset, ...props }: ComponentProps<typeof Menu$1.Positioner>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof Menu$1.Popup>): react.JSX.Element;
declare function Item({ className, ...props }: ComponentProps<typeof Menu$1.Item>): react.JSX.Element;
declare function Separator({ className, ...props }: ComponentProps<typeof Menu$1.Separator>): react.JSX.Element;
declare function GroupLabel({ className, ...props }: ComponentProps<typeof Menu$1.GroupLabel>): react.JSX.Element;
declare const Menubar: {
    Root: typeof Root;
    Menu: typeof Menu;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Positioner: typeof Positioner;
    Popup: typeof Popup;
    Item: typeof Item;
    Separator: typeof Separator;
    GroupLabel: typeof GroupLabel;
};

export { Menubar };

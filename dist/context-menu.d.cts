import * as react from 'react';
import { ComponentProps } from 'react';
import { ContextMenu as ContextMenu$1 } from '@base-ui/react/context-menu';

declare function Root(props: ComponentProps<typeof ContextMenu$1.Root>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof ContextMenu$1.Trigger>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof ContextMenu$1.Portal>): react.JSX.Element;
declare function Positioner({ className, ...props }: ComponentProps<typeof ContextMenu$1.Positioner>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof ContextMenu$1.Popup>): react.JSX.Element;
declare function Item({ className, ...props }: ComponentProps<typeof ContextMenu$1.Item>): react.JSX.Element;
declare function Separator({ className, ...props }: ComponentProps<typeof ContextMenu$1.Separator>): react.JSX.Element;
declare function Group({ className, ...props }: ComponentProps<typeof ContextMenu$1.Group>): react.JSX.Element;
declare function GroupLabel({ className, ...props }: ComponentProps<typeof ContextMenu$1.GroupLabel>): react.JSX.Element;
declare const ContextMenu: {
    Root: typeof Root;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Positioner: typeof Positioner;
    Popup: typeof Popup;
    Item: typeof Item;
    Separator: typeof Separator;
    Group: typeof Group;
    GroupLabel: typeof GroupLabel;
};

export { ContextMenu };

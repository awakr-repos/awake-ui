import * as react from 'react';
import { ComponentProps } from 'react';
import { NavigationMenu as NavigationMenu$1 } from '@base-ui/react/navigation-menu';

declare function Root({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Root>): react.JSX.Element;
declare function List({ className, ...props }: ComponentProps<typeof NavigationMenu$1.List>): react.JSX.Element;
declare function Item({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Item>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Trigger>): react.JSX.Element;
declare function Link({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Link>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof NavigationMenu$1.Portal>): react.JSX.Element;
declare function Positioner({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Positioner>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Popup>): react.JSX.Element;
declare function Viewport({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Viewport>): react.JSX.Element;
declare function Arrow({ className, ...props }: ComponentProps<typeof NavigationMenu$1.Arrow>): react.JSX.Element;
declare const NavigationMenu: {
    Root: typeof Root;
    List: typeof List;
    Item: typeof Item;
    Trigger: typeof Trigger;
    Link: typeof Link;
    Portal: typeof Portal;
    Positioner: typeof Positioner;
    Popup: typeof Popup;
    Viewport: typeof Viewport;
    Arrow: typeof Arrow;
};

export { NavigationMenu };

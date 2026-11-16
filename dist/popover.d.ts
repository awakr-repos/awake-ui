import * as react from 'react';
import { ComponentProps } from 'react';
import { Popover as Popover$1 } from '@base-ui/react/popover';

declare function Root(props: ComponentProps<typeof Popover$1.Root>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof Popover$1.Trigger>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof Popover$1.Portal>): react.JSX.Element;
declare function Backdrop({ className, ...props }: ComponentProps<typeof Popover$1.Backdrop>): react.JSX.Element;
declare function Positioner({ className, sideOffset, ...props }: ComponentProps<typeof Popover$1.Positioner>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof Popover$1.Popup>): react.JSX.Element;
declare function Title({ className, ...props }: ComponentProps<typeof Popover$1.Title>): react.JSX.Element;
declare function Description({ className, ...props }: ComponentProps<typeof Popover$1.Description>): react.JSX.Element;
declare function Close({ className, ...props }: ComponentProps<typeof Popover$1.Close>): react.JSX.Element;
declare function Arrow({ className, ...props }: ComponentProps<typeof Popover$1.Arrow>): react.JSX.Element;
declare const Popover: {
    Root: typeof Root;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Backdrop: typeof Backdrop;
    Positioner: typeof Positioner;
    Popup: typeof Popup;
    Title: typeof Title;
    Description: typeof Description;
    Close: typeof Close;
    Arrow: typeof Arrow;
};

export { Popover };

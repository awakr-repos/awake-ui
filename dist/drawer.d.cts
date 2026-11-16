import * as react from 'react';
import { ComponentProps } from 'react';
import { Dialog } from '@base-ui/react/dialog';

type DrawerRootProps = ComponentProps<typeof Dialog.Root>;
declare function Root(props: DrawerRootProps): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof Dialog.Trigger>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof Dialog.Portal>): react.JSX.Element;
declare function Backdrop({ className, ...props }: ComponentProps<typeof Dialog.Backdrop>): react.JSX.Element;
type PopupProps = ComponentProps<typeof Dialog.Popup> & {
    side?: 'left' | 'right' | 'bottom' | 'top';
};
declare function Popup({ className, side, ...props }: PopupProps): react.JSX.Element;
declare function Title({ className, ...props }: ComponentProps<typeof Dialog.Title>): react.JSX.Element;
declare function Description({ className, ...props }: ComponentProps<typeof Dialog.Description>): react.JSX.Element;
declare function Close({ className, ...props }: ComponentProps<typeof Dialog.Close>): react.JSX.Element;
declare const Drawer: {
    Root: typeof Root;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Backdrop: typeof Backdrop;
    Popup: typeof Popup;
    Title: typeof Title;
    Description: typeof Description;
    Close: typeof Close;
};

export { Drawer };

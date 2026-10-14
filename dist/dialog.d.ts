import * as _base_ui_react from '@base-ui/react';
import * as react from 'react';
import { ComponentProps } from 'react';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';

declare function Root(props: ComponentProps<typeof Dialog$1.Root>): react.JSX.Element;
/**
 * Dialog.Trigger has no visual style of its own — appearance is up to the consumer.
 * Use the render prop to pass a Button or any other element:
 *
 * @example
 * <Dialog.Trigger render={<Button>Open</Button>} />
 * <Dialog.Trigger render={<Button variant="secondary">Open</Button>} />
 * <Dialog.Trigger>Open</Dialog.Trigger>  // unstyled, behavior only
 */
declare function Trigger({ className, ...props }: ComponentProps<typeof Dialog$1.Trigger>): react.JSX.Element;
declare function Backdrop({ className, ...props }: ComponentProps<typeof Dialog$1.Backdrop>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof Dialog$1.Popup>): react.JSX.Element;
declare function Title({ className, ...props }: ComponentProps<typeof Dialog$1.Title>): react.JSX.Element;
declare function Description({ className, ...props }: ComponentProps<typeof Dialog$1.Description>): react.JSX.Element;
declare function Close({ className, ...props }: ComponentProps<typeof Dialog$1.Close>): react.JSX.Element;
declare const Dialog: {
    Root: typeof Root;
    Trigger: typeof Trigger;
    Portal: react.ForwardRefExoticComponent<Omit<_base_ui_react.AlertDialogPortalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Backdrop: typeof Backdrop;
    Popup: typeof Popup;
    Title: typeof Title;
    Description: typeof Description;
    Close: typeof Close;
};

export { Dialog };

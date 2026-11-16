import * as react from 'react';
import { ComponentProps } from 'react';
import { PreviewCard as PreviewCard$1 } from '@base-ui/react/preview-card';

declare function Root(props: ComponentProps<typeof PreviewCard$1.Root>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof PreviewCard$1.Trigger>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof PreviewCard$1.Portal>): react.JSX.Element;
declare function Positioner({ className, sideOffset, ...props }: ComponentProps<typeof PreviewCard$1.Positioner>): react.JSX.Element;
declare function Popup({ className, ...props }: ComponentProps<typeof PreviewCard$1.Popup>): react.JSX.Element;
declare function Arrow({ className, ...props }: ComponentProps<typeof PreviewCard$1.Arrow>): react.JSX.Element;
declare const PreviewCard: {
    Root: typeof Root;
    Trigger: typeof Trigger;
    Portal: typeof Portal;
    Positioner: typeof Positioner;
    Popup: typeof Popup;
    Arrow: typeof Arrow;
};

export { PreviewCard };

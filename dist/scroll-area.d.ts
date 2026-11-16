import * as react from 'react';
import { ComponentProps } from 'react';
import { ScrollArea as ScrollArea$1 } from '@base-ui/react/scroll-area';

declare function Root({ className, ...props }: ComponentProps<typeof ScrollArea$1.Root>): react.JSX.Element;
declare function Viewport({ className, ...props }: ComponentProps<typeof ScrollArea$1.Viewport>): react.JSX.Element;
declare function Scrollbar({ className, orientation, ...props }: ComponentProps<typeof ScrollArea$1.Scrollbar>): react.JSX.Element;
declare const ScrollArea: {
    Root: typeof Root;
    Viewport: typeof Viewport;
    Scrollbar: typeof Scrollbar;
};

export { ScrollArea };

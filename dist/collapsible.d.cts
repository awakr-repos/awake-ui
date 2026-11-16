import * as react from 'react';
import { ComponentProps } from 'react';
import { Collapsible as Collapsible$1 } from '@base-ui/react/collapsible';

declare function Root({ className, ...props }: ComponentProps<typeof Collapsible$1.Root>): react.JSX.Element;
declare function Trigger({ className, ...props }: ComponentProps<typeof Collapsible$1.Trigger>): react.JSX.Element;
declare function Panel({ className, ...props }: ComponentProps<typeof Collapsible$1.Panel>): react.JSX.Element;
declare const Collapsible: {
    Root: typeof Root;
    Trigger: typeof Trigger;
    Panel: typeof Panel;
};

export { Collapsible };

import * as react from 'react';
import { ComponentProps } from 'react';
import { Accordion as Accordion$1 } from '@base-ui/react/accordion';

declare function Root(props: ComponentProps<typeof Accordion$1.Root>): react.JSX.Element;
declare function Item(props: ComponentProps<typeof Accordion$1.Item>): react.JSX.Element;
declare function Header(props: ComponentProps<typeof Accordion$1.Header>): react.JSX.Element;
declare function Trigger(props: ComponentProps<typeof Accordion$1.Trigger>): react.JSX.Element;
declare function Panel(props: ComponentProps<typeof Accordion$1.Panel>): react.JSX.Element;
declare const Accordion: {
    Root: typeof Root;
    Item: typeof Item;
    Header: typeof Header;
    Trigger: typeof Trigger;
    Panel: typeof Panel;
};

export { Accordion };

import * as react from 'react';
import { ComponentProps } from 'react';
import { Tabs as Tabs$1 } from '@base-ui/react/tabs';

declare function Root(props: ComponentProps<typeof Tabs$1.Root>): react.JSX.Element;
declare function List(props: ComponentProps<typeof Tabs$1.List>): react.JSX.Element;
declare function Tab(props: ComponentProps<typeof Tabs$1.Tab>): react.JSX.Element;
declare function Panel(props: ComponentProps<typeof Tabs$1.Panel>): react.JSX.Element;
declare function Indicator(props: ComponentProps<typeof Tabs$1.Indicator>): react.JSX.Element;
declare const Tabs: {
    Root: typeof Root;
    List: typeof List;
    Tab: typeof Tab;
    Panel: typeof Panel;
    Indicator: typeof Indicator;
};

export { Tabs };

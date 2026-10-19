import * as react from 'react';
import { ComponentProps } from 'react';
import { Progress as Progress$1 } from '@base-ui/react/progress';

declare function Root(props: ComponentProps<typeof Progress$1.Root>): react.JSX.Element;
declare function Track(props: ComponentProps<typeof Progress$1.Track>): react.JSX.Element;
declare function Indicator(props: ComponentProps<typeof Progress$1.Indicator>): react.JSX.Element;
declare function Value(props: ComponentProps<typeof Progress$1.Value>): react.JSX.Element;
declare function Label(props: ComponentProps<typeof Progress$1.Label>): react.JSX.Element;
declare const Progress: {
    Root: typeof Root;
    Track: typeof Track;
    Indicator: typeof Indicator;
    Value: typeof Value;
    Label: typeof Label;
};

export { Progress };

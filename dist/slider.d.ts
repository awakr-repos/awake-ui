import * as react from 'react';
import { ComponentProps } from 'react';
import { Slider as Slider$1 } from '@base-ui/react/slider';

declare function Root(props: ComponentProps<typeof Slider$1.Root>): react.JSX.Element;
declare function Control(props: ComponentProps<typeof Slider$1.Control>): react.JSX.Element;
declare function Track(props: ComponentProps<typeof Slider$1.Track>): react.JSX.Element;
declare function Indicator(props: ComponentProps<typeof Slider$1.Indicator>): react.JSX.Element;
declare function Thumb(props: ComponentProps<typeof Slider$1.Thumb>): react.JSX.Element;
declare const Slider: {
    Root: typeof Root;
    Control: typeof Control;
    Track: typeof Track;
    Indicator: typeof Indicator;
    Thumb: typeof Thumb;
};

export { Slider };

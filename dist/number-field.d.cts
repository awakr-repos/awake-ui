import * as react from 'react';
import { ComponentProps } from 'react';
import { NumberField as NumberField$1 } from '@base-ui/react/number-field';

declare function Root(props: ComponentProps<typeof NumberField$1.Root>): react.JSX.Element;
declare function Group(props: ComponentProps<typeof NumberField$1.Group>): react.JSX.Element;
declare function Input(props: ComponentProps<typeof NumberField$1.Input>): react.JSX.Element;
declare function Increment(props: ComponentProps<typeof NumberField$1.Increment>): react.JSX.Element;
declare function Decrement(props: ComponentProps<typeof NumberField$1.Decrement>): react.JSX.Element;
declare function ScrubArea(props: ComponentProps<typeof NumberField$1.ScrubArea>): react.JSX.Element;
declare function ScrubAreaCursor(props: ComponentProps<typeof NumberField$1.ScrubAreaCursor>): react.JSX.Element;
declare const NumberField: {
    Root: typeof Root;
    Group: typeof Group;
    Input: typeof Input;
    Increment: typeof Increment;
    Decrement: typeof Decrement;
    ScrubArea: typeof ScrubArea;
    ScrubAreaCursor: typeof ScrubAreaCursor;
};

export { NumberField };

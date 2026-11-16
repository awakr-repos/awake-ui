import * as react from 'react';
import { ComponentProps } from 'react';
import { RadioGroup as RadioGroup$1 } from '@base-ui/react/radio-group';
import { Radio } from '@base-ui/react/radio';

declare function Root({ className, ...props }: ComponentProps<typeof RadioGroup$1>): react.JSX.Element;
declare function Item({ className, ...props }: ComponentProps<typeof Radio.Root>): react.JSX.Element;
declare const RadioGroup: {
    Root: typeof Root;
    Item: typeof Item;
};

export { RadioGroup };

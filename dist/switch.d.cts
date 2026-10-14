import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';
import { Switch as Switch$1 } from '@base-ui/react/switch';

declare function Root({ className, ...props }: ComponentPropsWithoutRef<typeof Switch$1.Root>): react.JSX.Element;
declare function Thumb({ className, ...props }: ComponentPropsWithoutRef<typeof Switch$1.Thumb>): react.JSX.Element;
declare const Switch: {
    Root: typeof Root;
    Thumb: typeof Thumb;
};

export { Switch };

import * as react from 'react';
import { ComponentProps } from 'react';
import { Toggle as Toggle$1 } from '@base-ui/react/toggle';
import { ToggleGroup } from '@base-ui/react/toggle-group';

type ToggleProps = ComponentProps<typeof Toggle$1> & {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'outline';
};
declare function Root({ className, size, variant, ...props }: ToggleProps): react.JSX.Element;
type GroupProps = ComponentProps<typeof ToggleGroup> & {
    size?: 'sm' | 'md' | 'lg';
};
declare function Group({ className, size, ...props }: GroupProps): react.JSX.Element;
declare const Toggle: {
    Root: typeof Root;
    Group: typeof Group;
};

export { Toggle };

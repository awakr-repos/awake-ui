import * as react from 'react';
import { ComponentProps } from 'react';
import { Input as Input$1 } from '@base-ui/react/input';

type InputProps = Omit<ComponentProps<typeof Input$1>, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
};
declare function Input({ className, size, ...props }: InputProps): react.JSX.Element;

export { Input };

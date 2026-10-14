import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    /** @default 'primary' */
    variant?: ButtonVariant;
    /** @default 'md' */
    size?: ButtonSize;
};
declare function Button({ children, variant, size, className, ...props }: ButtonProps): react.JSX.Element;

export { Button, type ButtonProps, type ButtonSize, type ButtonVariant };

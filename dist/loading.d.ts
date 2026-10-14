import * as react from 'react';
import { ComponentPropsWithoutRef } from 'react';

type LoadingSize = 'sm' | 'md' | 'lg';
type LoadingProps = ComponentPropsWithoutRef<'div'> & {
    /**
     * Size of the dots.
     * @default 'md'
     */
    size?: LoadingSize;
    /**
     * Accessible label for screen readers.
     * @default 'Loading…'
     */
    label?: string;
};
declare function Loading({ size, label, className, ...props }: LoadingProps): react.JSX.Element;

export { Loading, type LoadingProps, type LoadingSize };

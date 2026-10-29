import * as react from 'react';
import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
type BadgeProps = {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
};
declare function Badge({ children, variant, className }: BadgeProps): react.JSX.Element;

export { Badge, type BadgeProps, type BadgeVariant };

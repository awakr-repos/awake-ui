import * as react from 'react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type BottomNavProps = ComponentPropsWithoutRef<'nav'> & {
    children: ReactNode;
    className?: string;
};
type BottomNavItemProps = {
    icon: ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;
};
declare function BottomNavRoot({ children, className, ...props }: BottomNavProps): react.JSX.Element;
declare function BottomNavItem({ icon, label, active, onClick, className }: BottomNavItemProps): react.JSX.Element;
declare const BottomNav: {
    Root: typeof BottomNavRoot;
    Item: typeof BottomNavItem;
};

export { BottomNav, type BottomNavItemProps, type BottomNavProps };

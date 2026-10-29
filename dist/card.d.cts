import * as react from 'react';
import { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    className?: string;
};
declare function CardRoot({ children, className, ...props }: CardProps): react.JSX.Element;
declare function CardHeader({ children, className, ...props }: CardProps): react.JSX.Element;
declare function CardTitle({ children, className, ...props }: CardProps): react.JSX.Element;
declare function CardDescription({ children, className, ...props }: CardProps): react.JSX.Element;
declare function CardContent({ children, className, ...props }: CardProps): react.JSX.Element;
declare function CardFooter({ children, className, ...props }: CardProps): react.JSX.Element;
declare const Card: {
    Root: typeof CardRoot;
    Header: typeof CardHeader;
    Title: typeof CardTitle;
    Description: typeof CardDescription;
    Content: typeof CardContent;
    Footer: typeof CardFooter;
};

export { Card, type CardProps };

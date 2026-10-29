import * as react from 'react';
import { ReactNode } from 'react';

type AvatarSize = 'sm' | 'md' | 'lg';
type AvatarProps = {
    src?: string;
    alt?: string;
    fallback?: ReactNode;
    size?: AvatarSize;
    className?: string;
};
declare function Avatar({ src, alt, fallback, size, className }: AvatarProps): react.JSX.Element;

export { Avatar, type AvatarProps, type AvatarSize };

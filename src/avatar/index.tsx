import { ReactNode } from 'react';
import { clsx } from 'clsx';

export type AvatarSize = 'sm' | 'md' | 'lg';

export type AvatarProps = {
  src?: string;
  alt?: string;
  fallback?: ReactNode;
  size?: AvatarSize;
  className?: string;
};

export function Avatar({ src, alt = '', fallback, size = 'md', className }: AvatarProps) {
  return (
    <span className={clsx('awake-avatar', `awake-avatar--${size}`, className)} aria-label={alt || undefined}>
      {src ? (
        <img className="awake-avatar__img" src={src} alt={alt} />
      ) : (
        <span className="awake-avatar__fallback" aria-hidden="true">
          {fallback ?? alt.charAt(0).toUpperCase()}
        </span>
      )}
    </span>
  );
}

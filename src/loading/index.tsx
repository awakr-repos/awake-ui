import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export type LoadingSize = 'sm' | 'md' | 'lg';

export type LoadingProps = ComponentPropsWithoutRef<'div'> & {
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

const sizeClasses: Record<LoadingSize, string> = {
  sm: 'awake-loading-dot--sm',
  md: 'awake-loading-dot--md',
  lg: 'awake-loading-dot--lg',
};

export function Loading({ size = 'md', label = 'Loading…', className, ...props }: LoadingProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={clsx('awake-loading-container', className)}
      {...props}
    >
      <div className="awake-loading-dots">
        <span className={clsx('awake-loading-dot', sizeClasses[size])} />
        <span className={clsx('awake-loading-dot', sizeClasses[size])} />
        <span className={clsx('awake-loading-dot', sizeClasses[size])} />
      </div>
    </div>
  );
}

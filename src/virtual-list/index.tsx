'use client';

import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useEffect, ComponentProps } from 'react';
import clsx from 'clsx';
import './styles.css';

export type VirtualListRenderItemFn<T> = (item: T, index: number) => React.ReactNode;

export type VirtualListProps<T> = {
  /** Array of items to render. */
  items: T[];
  /** Height of each row in pixels. */
  itemHeight: number;
  /** Renders a single row. Receives the item and its index. */
  renderItem: VirtualListRenderItemFn<T>;
  /** Fixed height of the scroll container. Defaults to 400px. */
  height?: number;
  /** Number of items to render beyond the visible area on each side. */
  overscan?: number;
  className?: string;
  viewportClassName?: string;
} & Omit<ComponentProps<'div'>, 'children'>;

export function VirtualList<T>({
  items,
  itemHeight,
  renderItem,
  height = 400,
  overscan = 5,
  className,
  viewportClassName,
  style,
  ...props
}: VirtualListProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    overscan,
  });

  useEffect(() => {
    virtualizer.measure();
  }, []);

  return (
    <div
      className={clsx('awake-virtual-list', className)}
      style={{ height, width: '100%', maxWidth: 600, ...style }}
      {...props}
    >
      <div
        ref={parentRef}
        className={clsx('awake-virtual-list-viewport', viewportClassName)}
        style={{ width: '100%', height, overflowY: 'auto' }}
      >
        <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
          {virtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              className="awake-virtual-list-item"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {renderItem(items[virtualItem.index], virtualItem.index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

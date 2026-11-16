import * as react from 'react';
import { ComponentProps } from 'react';

type VirtualListRenderItemFn<T> = (item: T, index: number) => React.ReactNode;
type VirtualListProps<T> = {
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
declare function VirtualList<T>({ items, itemHeight, renderItem, height, overscan, className, viewportClassName, style, ...props }: VirtualListProps<T>): react.JSX.Element;

export { VirtualList, type VirtualListProps, type VirtualListRenderItemFn };

import * as react from 'react';
import { ReactNode } from 'react';

type ToastVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
type ToastItem = {
    id: string;
    message: ReactNode;
    variant?: ToastVariant;
    duration?: number;
};
type ToastContextValue = {
    toast: (options: Omit<ToastItem, 'id'>) => void;
};
declare function ToastProvider({ children }: {
    children: ReactNode;
}): react.JSX.Element;
declare function useToast(): ToastContextValue;
declare const Toast: {
    Provider: typeof ToastProvider;
};

export { Toast, type ToastItem, ToastProvider, type ToastVariant, useToast };

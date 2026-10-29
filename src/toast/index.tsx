'use client';

import { createContext, useCallback, useContext, useId, useRef, useState, ReactNode } from 'react';
import { clsx } from 'clsx';

export type ToastVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

export type ToastItem = {
  id: string;
  message: ReactNode;
  variant?: ToastVariant;
  duration?: number;
};

type ToastContextValue = {
  toast: (options: Omit<ToastItem, 'id'>) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  const remove = useCallback((id: string) => {
    setItems(prev => prev.filter(t => t.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);

  const toast = useCallback((options: Omit<ToastItem, 'id'>) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    const duration = options.duration ?? 4000;
    setItems(prev => [...prev, { ...options, id }]);
    timers.current[id] = setTimeout(() => remove(id), duration);
  }, [remove]);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="awake-toast-region" role="region" aria-live="polite" aria-label="Notificações">
        {items.map(item => (
          <div
            key={item.id}
            className={clsx('awake-toast', item.variant && `awake-toast--${item.variant}`)}
            role="status"
          >
            <span className="awake-toast__message">{item.message}</span>
            <button
              className="awake-toast__close"
              onClick={() => remove(item.id)}
              aria-label="Fechar notificação"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}

export const Toast = { Provider: ToastProvider };

import { HTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

function CardRoot({ children, className, ...props }: CardProps) {
  return (
    <div className={clsx('awake-card', className)} {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <div className={clsx('awake-card__header', className)} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ children, className, ...props }: CardProps) {
  return (
    <h3 className={clsx('awake-card__title', className)} {...props}>
      {children}
    </h3>
  );
}

function CardDescription({ children, className, ...props }: CardProps) {
  return (
    <p className={clsx('awake-card__description', className)} {...props}>
      {children}
    </p>
  );
}

function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={clsx('awake-card__content', className)} {...props}>
      {children}
    </div>
  );
}

function CardFooter({ children, className, ...props }: CardProps) {
  return (
    <div className={clsx('awake-card__footer', className)} {...props}>
      {children}
    </div>
  );
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
};

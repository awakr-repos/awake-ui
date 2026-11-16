import { Checkbox as Checkbox$1 } from '@base-ui/react/checkbox';
import react__default from 'react';

type RootProps = Omit<react__default.ComponentPropsWithoutRef<typeof Checkbox$1.Root>, 'checked'> & {
    checked?: boolean | 'mixed';
    className?: string;
};
declare function Root({ className, ...props }: RootProps): react__default.JSX.Element;
declare function Indicator({ className, ...props }: react__default.ComponentPropsWithoutRef<typeof Checkbox$1.Indicator> & {
    className?: string;
}): react__default.JSX.Element;
declare const Checkbox: {
    Root: typeof Root;
    Indicator: typeof Indicator;
};

export { Checkbox };

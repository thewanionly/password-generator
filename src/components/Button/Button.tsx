import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/utils/styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', asChild = false, disabled = false, ...props }, ref) => {
    // construct the props
    const classes = cn(
      `border-2 border-green bg-green px-16 py-5 uppercase text-grey-dark`,
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-grey-dark hover:text-green',
      className
    );
    const commonProps = { className: classes, ref, disabled, ...props };
    const buttonProps = asChild ? commonProps : { type: 'button' as const, ...commonProps };

    // determine the final Button component
    const ButtonComponent = asChild ? Slot : 'button';

    return <ButtonComponent {...buttonProps} />;
  }
);

Button.displayName = 'Button';

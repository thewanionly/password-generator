import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/styles';

const buttonVariants = cva('uppercase', {
  variants: {
    variant: {
      default: `px-16 py-5
        border-2 border-green bg-green text-grey-dark
        enabled:hover:bg-grey-dark enabled:hover:text-green
        disabled:opacity-50 disabled:cursor-not-allowed`,
      ghost: 'p-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant, asChild = false, disabled = false, ...props }, ref) => {
    // construct the props
    const classes = cn(buttonVariants({ variant, className }));
    const commonProps = { className: classes, ref, disabled, ...props };
    const buttonProps = asChild ? commonProps : { type: 'button' as const, ...commonProps };

    // determine the final Button component
    const ButtonComponent = asChild ? Slot : 'button';

    return <ButtonComponent {...buttonProps} />;
  }
);

Button.displayName = 'Button';

'use client';

import * as React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Check } from '@/components/Icon';
import { cn } from '@/utils/styles';

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  label?: string;
  checkboxClassName?: string;
};

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, checkboxClassName, id, label, ...props }, ref) => {
    const checkBoxId = React.useId() ?? id;
    const Container = label ? 'div' : React.Fragment;
    const containerProps = label ? { className: cn('flex items-center gap-5', className) } : {};

    return (
      <Container {...containerProps}>
        <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
            `peer h-5 w-5 shrink-0
      border-2 border-grey-light
      hover:border-green disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-grey-light
      data-[state=checked]:border-green data-[state=checked]:bg-green data-[state=checked]:text-grey-darkest`,
            checkboxClassName
          )}
          id={checkBoxId}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn('text-current flex items-center justify-center')}
          >
            <Check className="h-4 w-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <label
            htmlFor={checkBoxId}
            className="text-medium font-bold leading-none text-grey-light peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </Container>
    );
  }
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

'use client';

import * as React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Check } from '@/components/Icon';
import { cn } from '@/utils/styles';

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        `peer h-5 w-5 shrink-0
    border-2 border-grey-lightest
    hover:border-green disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-grey-lightest
    data-[state=checked]:border-green data-[state=checked]:bg-green data-[state=checked]:text-grey-darkest`,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('text-current flex items-center justify-center')}>
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

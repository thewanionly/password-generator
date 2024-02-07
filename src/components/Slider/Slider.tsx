'use client';

import * as React from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/utils/styles';

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, disabled, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      disabled && 'cursor-not-allowed',
      className
    )}
    disabled={disabled}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-grey-darkest">
      <SliderPrimitive.Range className={cn('absolute h-full bg-green', disabled && 'opacity-50')} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        `block h-7 w-7 rounded-full border-2 border-grey-lightest bg-grey-lightest ring-offset-grey-darkest transition-colors
        hover:border-green hover:bg-grey-darkest
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green focus-visible:ring-offset-2
        `,
        !disabled
          ? 'hover:border-green hover:bg-grey-darkest'
          : 'pointer-events-none border-grey-light bg-grey-light '
      )}
    />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

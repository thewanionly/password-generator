'use client';

import * as React from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/utils/styles';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-grey-darkest">
      <SliderPrimitive.Range className="absolute h-full bg-green" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="
      block h-7 w-7 rounded-full border-2 border-grey-light bg-grey-light ring-offset-grey-darkest transition-colors
      hover:border-green hover:bg-grey-darkest
      focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green focus-visible:ring-offset-2
      disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

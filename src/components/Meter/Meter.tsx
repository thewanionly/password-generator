'use client';

import { forwardRef } from 'react';

import { range } from '@/utils/range';
import { cn } from '@/utils/styles';

import { DEFAULT_NUM_OF_BARS } from './Meter.constants';

type MeterProps = {
  className?: string;
  numOfBars?: number;
  value: number;
  max: number;
};

export const Meter = forwardRef<HTMLDivElement, MeterProps>(
  ({ className = '', numOfBars = DEFAULT_NUM_OF_BARS, value, max }, ref) => {
    const classes = cn(`flex gap-2`, className);

    return (
      <div
        ref={ref}
        className={classes}
        role="meter"
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={0}
      >
        {range(numOfBars).map((barIndex) => (
          <span
            key={barIndex}
            className="h-7 w-2.5 border-2 border-grey-lightest"
            data-testid="meter-bar"
          />
        ))}
      </div>
    );
  }
);

Meter.displayName = 'Meter';

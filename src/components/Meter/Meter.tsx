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

// TODO: don't use enums
enum MeterBarColor {
  RED = 'red',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  GREEN = 'green',
}

type MeterBarProps = {
  filled: boolean;
  color?: MeterBarColor;
};

const MeterBar = ({ filled, color }: MeterBarProps) => {
  const barBgColor = color ?? 'transparent';
  const barBorderColor = color ?? 'grey-lightest';

  return (
    <span
      className={cn(
        'h-7 w-2.5 border-2',
        filled ? `border-${barBorderColor}` : 'border-grey-lightest',
        filled && `bg-${barBgColor}`
      )}
      data-testid={filled ? 'meter-bar-filled' : 'meter-bar'}
    />
  );
};

export const Meter = forwardRef<HTMLDivElement, MeterProps>(
  ({ className = '', numOfBars = DEFAULT_NUM_OF_BARS, value, max }, ref) => {
    const classes = cn(`flex gap-2`, className);

    const percentage = (value / max) * 100;

    // TODO: make this better
    let barColor: MeterBarColor;
    let barsToFill = 0;

    if (percentage > 0 && percentage <= 25) {
      barColor = MeterBarColor.RED;
      barsToFill = Math.floor(numOfBars * 0.25);
    } else if (percentage > 25 && percentage <= 50) {
      barColor = MeterBarColor.ORANGE;
      barsToFill = Math.floor(numOfBars * 0.5);
    } else if (percentage > 50 && percentage <= 75) {
      barColor = MeterBarColor.YELLOW;
      barsToFill = Math.floor(numOfBars * 0.75);
    } else if (percentage > 75) {
      barColor = MeterBarColor.GREEN;
      barsToFill = numOfBars;
    }

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
          <MeterBar
            key={barIndex}
            filled={barsToFill > 0 && barIndex + 1 <= barsToFill}
            color={barColor}
          />
        ))}
      </div>
    );
  }
);

Meter.displayName = 'Meter';

'use client';

import { forwardRef } from 'react';

import { range } from '@/utils/range';
import { cn } from '@/utils/styles';

import { DEFAULT_NUM_OF_BARS, MeterBarLevelMap } from './Meter.constants';
import { getMeterFilledBars, getMeterLevel } from './Meter.utils';

type MeterProps = {
  className?: string;
  numOfBars?: number;
  value: number;
  max: number;
};

type MeterBarProps = {
  isFilled: boolean;
  bgColor: string;
  borderColor: string;
};

const MeterBar = ({ isFilled, bgColor, borderColor }: MeterBarProps) => {
  const bg = isFilled ? bgColor : 'bg-transparent';
  const border = isFilled ? borderColor : 'border-grey-lightest';

  return (
    <span
      className={cn('h-7 w-2.5 border-2', bg, border)}
      data-testid={isFilled ? 'meter-bar-filled' : 'meter-bar'}
    />
  );
};

export const Meter = forwardRef<HTMLDivElement, MeterProps>(
  ({ className = '', numOfBars = DEFAULT_NUM_OF_BARS, value, max }, ref) => {
    const classes = cn(`flex gap-2`, className);

    const level = getMeterLevel(value, max);
    const { bgColor, borderColor } = MeterBarLevelMap[level];
    const filledBars = getMeterFilledBars(value, max, numOfBars);

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
            isFilled={barIndex < filledBars}
            bgColor={bgColor}
            borderColor={borderColor}
          />
        ))}
      </div>
    );
  }
);

Meter.displayName = 'Meter';

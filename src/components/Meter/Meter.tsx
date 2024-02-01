'use client';

import { forwardRef } from 'react';

import { range } from '@/utils/range';
import { cn } from '@/utils/styles';

import { DEFAULT_NUM_OF_BARS, MeterBarLevel, MeterBarLevelMap } from './Meter.constants';
import { getMeterLevel } from './Meter.utils';

type MeterProps = {
  className?: string;
  numOfBars?: number;
  value: number;
  max: number;
};

type MeterBarProps = {
  position: number;
  numOfBars: number;
  level: MeterBarLevel;
};

const MeterBar = ({ position, numOfBars, level }: MeterBarProps) => {
  const { bg, border, filledBars } = MeterBarLevelMap[level];

  const barsToFill = typeof filledBars === 'function' ? filledBars(numOfBars) : filledBars;
  const isFilled = barsToFill > 0 && position <= barsToFill;

  const bgColor = isFilled ? bg : 'bg-transparent';
  const borderColor = isFilled ? border : 'border-grey-lightest';

  return (
    <span
      className={cn('h-7 w-2.5 border-2', bgColor, borderColor)}
      data-testid={isFilled ? 'meter-bar-filled' : 'meter-bar'}
    />
  );
};

export const Meter = forwardRef<HTMLDivElement, MeterProps>(
  ({ className = '', numOfBars = DEFAULT_NUM_OF_BARS, value, max }, ref) => {
    const classes = cn(`flex gap-2`, className);

    const level = getMeterLevel(value, max);

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
          <MeterBar key={barIndex} position={barIndex + 1} numOfBars={numOfBars} level={level} />
        ))}
      </div>
    );
  }
);

Meter.displayName = 'Meter';

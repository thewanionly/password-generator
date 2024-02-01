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

enum MeterBarLevel {
  EMPTY = 'empty',
  QUARTER = 'quarter',
  HALF = 'half',
  THREE_QUATERS = 'three_quarters',
  FULL = 'full',
}

interface MeterBarProperties {
  bg: string;
  border: string;
  filledBars: number | ((numOfBars: number) => number);
}

const MeterBarLevelMap: Record<MeterBarLevel, MeterBarProperties> = {
  [MeterBarLevel.EMPTY]: {
    bg: 'bg-transparent',
    border: 'border-grey-lightest',
    filledBars: 0,
  },
  [MeterBarLevel.QUARTER]: {
    bg: 'bg-red',
    border: 'border-red',
    filledBars: (numOfBars) => Math.floor(numOfBars * 0.33),
  },
  [MeterBarLevel.HALF]: {
    bg: 'bg-orange',
    border: 'border-orange',
    filledBars: (numOfBars) => Math.floor(numOfBars * 0.66),
  },
  [MeterBarLevel.THREE_QUATERS]: {
    bg: 'bg-yellow',
    border: 'border-yellow',
    filledBars: (numOfBars) => Math.floor(numOfBars * 0.99),
  },
  [MeterBarLevel.FULL]: {
    bg: 'bg-green',
    border: 'border-green',
    filledBars: (numOfBars) => numOfBars,
  },
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

    const percentage = (value / max) * 100;

    // TODO: make this better
    let level = MeterBarLevel.EMPTY;

    if (percentage > 0 && percentage <= 33) {
      level = MeterBarLevel.QUARTER;
    } else if (percentage > 33 && percentage <= 66) {
      level = MeterBarLevel.HALF;
    } else if (percentage > 66 && percentage <= 99) {
      level = MeterBarLevel.THREE_QUATERS;
    } else if (percentage === 100) {
      level = MeterBarLevel.FULL;
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
          <MeterBar key={barIndex} position={barIndex + 1} numOfBars={numOfBars} level={level} />
        ))}
      </div>
    );
  }
);

Meter.displayName = 'Meter';

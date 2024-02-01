export const DEFAULT_NUM_OF_BARS = 4;

export enum MeterBarLevel {
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

export const MeterBarLevelMap: Record<MeterBarLevel, MeterBarProperties> = {
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

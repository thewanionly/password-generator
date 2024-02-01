export const DEFAULT_NUM_OF_BARS = 4;

export enum MeterBarLevel {
  EMPTY = 'empty',
  QUARTER = 'quarter',
  HALF = 'half',
  THREE_QUARTERS = 'three_quarters',
  FULL = 'full',
}

interface MeterBarProperties {
  bg: string;
  border: string;
}

export const MeterBarLevelMap: Record<MeterBarLevel, MeterBarProperties> = {
  [MeterBarLevel.EMPTY]: {
    bg: 'bg-transparent',
    border: 'border-grey-lightest',
  },
  [MeterBarLevel.QUARTER]: {
    bg: 'bg-red',
    border: 'border-red',
  },
  [MeterBarLevel.HALF]: {
    bg: 'bg-orange',
    border: 'border-orange',
  },
  [MeterBarLevel.THREE_QUARTERS]: {
    bg: 'bg-yellow',
    border: 'border-yellow',
  },
  [MeterBarLevel.FULL]: {
    bg: 'bg-green',
    border: 'border-green',
  },
};

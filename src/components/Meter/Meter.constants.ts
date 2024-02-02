export const DEFAULT_NUM_OF_BARS = 4;

export enum MeterBarLevel {
  EMPTY = 'empty',
  QUARTER = 'quarter',
  HALF = 'half',
  THREE_QUARTERS = 'three_quarters',
  FULL = 'full',
}

interface MeterBarProperties {
  bgColor: string;
  borderColor: string;
}

export const MeterBarLevelMap: Record<MeterBarLevel, MeterBarProperties> = {
  [MeterBarLevel.EMPTY]: {
    bgColor: 'bg-transparent',
    borderColor: 'border-grey-lightest',
  },
  [MeterBarLevel.QUARTER]: {
    bgColor: 'bg-red',
    borderColor: 'border-red',
  },
  [MeterBarLevel.HALF]: {
    bgColor: 'bg-orange',
    borderColor: 'border-orange',
  },
  [MeterBarLevel.THREE_QUARTERS]: {
    bgColor: 'bg-yellow',
    borderColor: 'border-yellow',
  },
  [MeterBarLevel.FULL]: {
    bgColor: 'bg-green',
    borderColor: 'border-green',
  },
};

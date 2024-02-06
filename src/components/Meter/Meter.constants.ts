export const DEFAULT_NUM_OF_BARS = 4;

export enum MeterBarLevel {
  EMPTY = 'empty',
  LOW = 'low',
  MODERATE = 'moderate',
  MEDIUM = 'medium',
  HIGH = 'high',
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
  [MeterBarLevel.LOW]: {
    bgColor: 'bg-red',
    borderColor: 'border-red',
  },
  [MeterBarLevel.MODERATE]: {
    bgColor: 'bg-orange',
    borderColor: 'border-orange',
  },
  [MeterBarLevel.MEDIUM]: {
    bgColor: 'bg-yellow',
    borderColor: 'border-yellow',
  },
  [MeterBarLevel.HIGH]: {
    bgColor: 'bg-green',
    borderColor: 'border-green',
  },
};

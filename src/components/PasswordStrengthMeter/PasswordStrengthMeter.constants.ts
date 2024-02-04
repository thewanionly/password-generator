import { MeterBarLevel } from '../Meter';

export const LEVEL_TO_STRENGTH_MAP = {
  [MeterBarLevel.EMPTY]: '',
  [MeterBarLevel.QUARTER]: 'Too Weak!',
  [MeterBarLevel.HALF]: 'Weak',
  [MeterBarLevel.THREE_QUARTERS]: 'Medium',
  [MeterBarLevel.FULL]: 'Strong',
};

export const PASSWORD_STRENGTH_FACTORS_NUM = 5;

export const PASSWORD_STRENGTH_LABEL = 'Strength';

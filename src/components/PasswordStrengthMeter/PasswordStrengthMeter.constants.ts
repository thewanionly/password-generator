import { MeterBarLevel } from '../Meter';

export const LEVEL_TO_STRENGTH_MAP = {
  [MeterBarLevel.EMPTY]: '',
  [MeterBarLevel.LOW]: 'Too Weak!',
  [MeterBarLevel.MODERATE]: 'Weak',
  [MeterBarLevel.MEDIUM]: 'Medium',
  [MeterBarLevel.HIGH]: 'Strong',
};

export const PASSWORD_STRENGTH_FACTORS_NUM = 5;

export const PASSWORD_STRENGTH_LABEL = 'Strength';

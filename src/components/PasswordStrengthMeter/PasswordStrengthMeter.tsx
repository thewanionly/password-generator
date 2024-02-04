import { cn } from '@/utils/styles';

import { Meter, getMeterLevel } from '../Meter';
import {
  LEVEL_TO_STRENGTH_MAP,
  PASSWORD_STRENGTH_FACTORS_NUM,
  PASSWORD_STRENGTH_LABEL,
} from './PasswordStrengthMeter.constants';

type PasswordStrengthMeterProps = {
  className?: string;
  value: number;
};

export const PasswordStrengthMeter = ({
  className = '',
  value = 0,
}: PasswordStrengthMeterProps) => {
  const level = getMeterLevel(value, PASSWORD_STRENGTH_FACTORS_NUM);
  const strength = LEVEL_TO_STRENGTH_MAP[level];

  return (
    <div className={cn('flex items-center justify-between bg-grey-darkest p-4', className)}>
      <span className="flex-1 uppercase text-grey">{PASSWORD_STRENGTH_LABEL}</span>
      <span className="mr-4 text-lg uppercase text-grey-lightest">{strength}</span>
      <Meter value={value} max={PASSWORD_STRENGTH_FACTORS_NUM} numOfBars={4} />
    </div>
  );
};

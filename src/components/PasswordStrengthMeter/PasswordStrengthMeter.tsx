import { cn } from '@/utils/styles';

import { Meter, MeterBarLevel, getMeterLevel } from '../Meter';

const PASSWORD_STRENGTH_FACTORS_NUM = 5;

const LEVEL_TO_STRENGTH_MAP = {
  [MeterBarLevel.EMPTY]: '',
  [MeterBarLevel.QUARTER]: 'Too Weak!',
  [MeterBarLevel.HALF]: 'Weak',
  [MeterBarLevel.THREE_QUARTERS]: 'Medium',
  [MeterBarLevel.FULL]: 'Strong',
};

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
    <div className={cn('flex items-center justify-between gap-4 bg-grey-darkest p-4', className)}>
      <span className="uppercase text-grey">Strength</span>
      <div className="flex items-center gap-4">
        <span className="text-lg uppercase text-grey-lightest">{strength}</span>
        <Meter value={value} max={PASSWORD_STRENGTH_FACTORS_NUM} numOfBars={4} />
      </div>
    </div>
  );
};

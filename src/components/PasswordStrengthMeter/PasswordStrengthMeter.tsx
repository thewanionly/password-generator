import { checkPasswordStrength } from '@/utils/password/checkPasswordStrength';
import { cn } from '@/utils/styles';

import { Meter } from '../Meter';
import { PASSWORD_STRENGTH_LABEL, PASSWORD_STRENGTH_TEXT } from './PasswordStrengthMeter.constants';

type PasswordStrengthMeterProps = {
  className?: string;
  password: string;
};

export const PasswordStrengthMeter = ({ className = '', password }: PasswordStrengthMeterProps) => {
  const { strength = '', value = 0 } = checkPasswordStrength(password) ?? {};
  const strengthText = strength && PASSWORD_STRENGTH_TEXT[strength];

  return (
    <div className={cn('flex items-center justify-between bg-grey-darkest p-4', className)}>
      <span className="flex-1 uppercase text-grey">{PASSWORD_STRENGTH_LABEL}</span>
      <span className="mr-4 text-lg uppercase text-grey-lightest">{strengthText}</span>
      <Meter value={value} max={4} numOfBars={4} />
    </div>
  );
};

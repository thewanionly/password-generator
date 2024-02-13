import { PasswordStrength } from './checkPasswordStrength.constants';

type CheckPasswordStrengthReturnValue = {
  strength: PasswordStrength;
  value: number;
};

export const checkPasswordStrength = (
  password: string
): CheckPasswordStrengthReturnValue | null => {
  if (!password) return null;

  return {
    strength: PasswordStrength.TOO_WEAK,
    value: 1,
  };
};

import { PasswordStrength } from '@/utils/password/checkPasswordStrength';

export const PASSWORD_STRENGTH_TEXT = {
  [PasswordStrength.TOO_WEAK]: 'Too Weak!',
  [PasswordStrength.WEAK]: 'Weak',
  [PasswordStrength.MEDIUM]: 'Medium',
  [PasswordStrength.STRONG]: 'Strong',
};

export const PASSWORD_STRENGTH_FACTORS_NUM = 5;

export const PASSWORD_STRENGTH_LABEL = 'Strength';

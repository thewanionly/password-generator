import { PasswordStrength } from './checkPasswordStrength.constants';

type CheckPasswordStrengthReturnValue = {
  strength: PasswordStrength | '';
  value: number;
};

// These Reg Exes matches if the specified expression/s is included in the string
// (other expressions being included are fine)
const CHAR_REGEX = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBERS: /\d/,
  SYMBOLS: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
};

const RECOMMENDED_PASSWORD_LENGTH = 12;

export const checkPasswordStrength = (password: string): CheckPasswordStrengthReturnValue => {
  if (!password) return { strength: '', value: 0 };

  // scale length score between 0 and 1
  const lengthScore = Math.min(1, password.length / RECOMMENDED_PASSWORD_LENGTH);

  let complexityScore = 0;

  if (CHAR_REGEX.UPPERCASE.test(password)) complexityScore += 0.5;
  if (CHAR_REGEX.LOWERCASE.test(password)) complexityScore += 0.5;
  if (CHAR_REGEX.NUMBERS.test(password)) complexityScore += 0.5;
  if (CHAR_REGEX.SYMBOLS.test(password)) complexityScore += 0.5;
  complexityScore /= 2; //  Normalize the score between 0 and 1

  const totalScore = (lengthScore + complexityScore) / 2; // Taking an average

  let value = 1;
  let strength = PasswordStrength.TOO_WEAK;

  // calculate strength
  if (totalScore === 1) {
    value = 4;
    strength = PasswordStrength.STRONG;
  } else if (totalScore > 0.6) {
    value = 3;
    strength = PasswordStrength.MEDIUM;
  } else if (totalScore > 0.3) {
    value = 2;
    strength = PasswordStrength.WEAK;
  }

  return { strength, value };
};

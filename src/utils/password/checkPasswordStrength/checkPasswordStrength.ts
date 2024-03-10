import { PasswordStrength } from './checkPasswordStrength.constants';
import {
  calculateRepeatCharsDeduction,
  countConsecutiveLCLetters,
  countConsecutiveNumbers,
  countConsecutiveUCLetters,
  countSequentialLetters,
  countSequentialNumbers,
  countSequentialSymbols,
} from './checkPasswordStrength.utils';

type CheckPasswordStrengthReturnValue = {
  strength: PasswordStrength | '';
  value: number;
};

const RECOMMENDED_PASSWORD_LENGTH = 12;

const calculateAdditions = (password: string): number => {
  const passwordLength = password.length;

  const upperCaseCount = (password.match(/[A-Z]/g) || []).length;
  const lowerCaseCount = (password.match(/[a-z]/g) || []).length;
  const numbersCount = (password.match(/\d/g) || []).length;
  const symbolsCount = (password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g) || []).length;

  let additions = 0;

  // 1. number of chars
  additions += passwordLength * 4;

  // number of letters/numbers  (only add when passwordLength > 4 and at least one of the other chars is present )
  if (passwordLength > 4) {
    // 2. uppercase letters

    if (upperCaseCount > 0 && lowerCaseCount + numbersCount + symbolsCount > 0) {
      additions += (passwordLength - upperCaseCount) * 2;
    }

    // 3. lowercase letters
    if (lowerCaseCount > 0 && upperCaseCount + numbersCount + symbolsCount > 0) {
      additions += (passwordLength - lowerCaseCount) * 2;
    }

    // 4. numbers
    if (numbersCount > 0 && upperCaseCount + lowerCaseCount + symbolsCount > 0) {
      additions += numbersCount * 4;
    }
  }

  // 4. symbols count
  additions += symbolsCount * 6;

  // 5. middle numbers or symbols
  const midNumOrSymCount = (
    password
      .substring(1, password.length - 1)
      .match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/g) || []
  ).length;
  additions += midNumOrSymCount * 2;

  // 6. meets the requirments (should only be added once all requirements are met)
  //  [1] at least 12 length
  //  [2] 1 uppercase letter
  //  [3] 1 lowercase letter
  //  [4] 1 number
  //  [5] 1 symbol
  if (
    passwordLength >= RECOMMENDED_PASSWORD_LENGTH &&
    upperCaseCount > 0 &&
    lowerCaseCount > 0 &&
    numbersCount > 0 &&
    symbolsCount > 0
  ) {
    const REQUIREMENTS_COUNT = 5;
    additions += REQUIREMENTS_COUNT * 2;
  }

  return additions;
};

const calculateDeductions = (password: string): number => {
  let deductions = 0;

  // 1. letters only
  if (/^[a-zA-Z]+$/.test(password)) {
    const lettersCount = (password.match(/[a-zA-Z]/g) || []).length;
    deductions += lettersCount;
  }

  // 2. numbers only
  if (/^\d+$/.test(password)) {
    const numbersCount = (password.match(/\d/g) || []).length;
    deductions += numbersCount;
  }

  // 3. repeated characters (case insenstive)
  deductions += calculateRepeatCharsDeduction(password);

  // 4. consecutive uppercase letters
  deductions += countConsecutiveUCLetters(password) * 2;

  // 5. consecutive lowercase letters
  deductions += countConsecutiveLCLetters(password) * 2;

  // 6. consecutive numbers
  deductions += countConsecutiveNumbers(password) * 2;

  // 7. sequential letters (3+)
  deductions += countSequentialLetters(password) * 3;

  // 8. sequential numbers (3+)
  deductions += countSequentialNumbers(password) * 3;

  // 9. sequential symbols (3+)
  deductions += countSequentialSymbols(password) * 3;

  return deductions;
};

const SCORE_TO_STRENGTH = [
  {
    condition: (score: number) => score >= 90,
    result: { strength: PasswordStrength.STRONG, value: 4 },
  },
  {
    condition: (score: number) => score < 90 && score >= 60,
    result: { strength: PasswordStrength.MEDIUM, value: 3 },
  },
  {
    condition: (score: number) => score < 60 && score >= 30,
    result: { strength: PasswordStrength.WEAK, value: 2 },
  },
  {
    condition: (score: number) => score < 30,
    result: { strength: PasswordStrength.TOO_WEAK, value: 1 },
  },
];

// Logic used here is based from this strength test: https://www.uic.edu/apps/strong-password/
export const checkPasswordStrength = (password: string): CheckPasswordStrengthReturnValue => {
  if (!password) return { strength: '', value: 0 };

  const additions = calculateAdditions(password);
  const deductions = calculateDeductions(password);

  // final score (capped with a min of 0 and max of 100)
  const score = Math.min(Math.max(additions - deductions, 0), 100);

  // calculate strength  from score
  return SCORE_TO_STRENGTH.find(({ condition }) => condition(score))
    ?.result as CheckPasswordStrengthReturnValue;
};

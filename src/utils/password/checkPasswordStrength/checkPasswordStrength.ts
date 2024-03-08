import { CHARACTERS } from '..';
import { PasswordStrength } from './checkPasswordStrength.constants';

type CheckPasswordStrengthReturnValue = {
  strength: PasswordStrength | '';
  value: number;
};

const RECOMMENDED_PASSWORD_LENGTH = 12;
const SEQUENTIAL_CHAR_LENGTH = 3;

const calculateRepeatCharsDeduction = (password: string) => {
  const passwordArr = password.split('');
  const passwordLength = passwordArr.length;

  let uniqueChar = 0,
    repeatedChar = 0,
    deduction = 0;

  // loop through each char and compare if it matches with the next chars
  for (let a = 0; a < passwordLength; a++) {
    let charExists = false;

    for (let b = 0; b < passwordLength; b++) {
      if (passwordArr[a] === passwordArr[b] && a !== b) {
        // if the repeated characters exists and they are not at the same position
        charExists = true;

        // calculate deduction based on proximity to repeated chars
        // the more close they are, the greated the deduction
        // deduction is incremented each time a new match is discovered,
        // regardless if they were matched before but in different order
        // (e.g. passwordArr[0] matches with passwordArr[1] is one increment and
        //  passwordArr[1] and passwordArr[0] is another increment)
        deduction += Math.abs(passwordLength / (b - a));
      }
    }

    if (charExists) {
      repeatedChar++;
      uniqueChar = passwordLength - repeatedChar;
      deduction = Math.ceil(deduction / (uniqueChar || 1)); // if uniqueChar is zero, divide by 1
    }
  }

  return deduction;
};

const countSequentialMatches = (text: string, orderOfCharacters: string) => {
  let sequentialLettersCount = 0;

  if (!text) return sequentialLettersCount;

  const strArr = text.toLowerCase().split('');

  for (let i = 0; i < strArr.length - (SEQUENTIAL_CHAR_LENGTH - 1); i++) {
    // forward direction
    if (
      orderOfCharacters.indexOf(strArr[i + 1]) - orderOfCharacters.indexOf(strArr[i]) === 1 &&
      orderOfCharacters.indexOf(strArr[i + 2]) - orderOfCharacters.indexOf(strArr[i]) === 2
    ) {
      sequentialLettersCount++;
    }

    // reverse direction
    if (
      orderOfCharacters.indexOf(strArr[i]) - orderOfCharacters.indexOf(strArr[i + 1]) === 1 &&
      orderOfCharacters.indexOf(strArr[i]) - orderOfCharacters.indexOf(strArr[i + 2]) === 2
    ) {
      sequentialLettersCount++;
    }
  }

  return sequentialLettersCount;
};

const countSequentialLetters = (text: string) =>
  countSequentialMatches(text, CHARACTERS.LOWERCASE_LETTERS);

const countSequentialNumbers = (text: string) => countSequentialMatches(text, CHARACTERS.NUMBERS);

const countSequentialSymbols = (text: string) => countSequentialMatches(text, CHARACTERS.SYMBOLS);

const countConsecutiveMatches = (text: string, pattern: RegExp) => {
  const consecutiveMatches = text.match(pattern);

  return consecutiveMatches
    ? consecutiveMatches
        .filter((value) => value.length > 1)
        .reduce((total, match) => total + (match.length - 1), 0)
    : 0;
};

// Logic used here is based from this strength test: https://www.uic.edu/apps/strong-password/
export const checkPasswordStrength = (password: string): CheckPasswordStrengthReturnValue => {
  if (!password) return { strength: '', value: 0 };

  const passwordLength = password.length;
  const upperCaseCount = password.replace(/[^A-Z]/g, '').length;
  const lowerCaseCount = password.replace(/[^a-z]/g, '').length;
  const numbersCount = (password.match(/\d/g) || []).length;
  const symbolsCount = (password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g) || []).length;

  let score = 0;

  /************* ADDITIONS *************/
  // 1. number of chars
  score += passwordLength * 4;

  // 2. uppercase letters (only add when at least one of the other chars is present and passwordLength > 4)
  if (
    passwordLength > 4 &&
    upperCaseCount > 0 &&
    lowerCaseCount + numbersCount + symbolsCount > 0
  ) {
    score += (passwordLength - upperCaseCount) * 2;
  }

  // 3. lowercase letters (only add when at least one of the other chars is present and passwordLength > 4)
  if (
    passwordLength > 4 &&
    lowerCaseCount > 0 &&
    upperCaseCount + numbersCount + symbolsCount > 0
  ) {
    score += (passwordLength - lowerCaseCount) * 2;
  }

  // 4. numbers (only add when at least one of the other chars is present and passwordLength > 4)
  if (
    passwordLength > 4 &&
    numbersCount > 0 &&
    upperCaseCount + lowerCaseCount + symbolsCount > 0
  ) {
    score += numbersCount * 4;
  }

  // 4. symbols
  score += symbolsCount * 6;

  // 5. middle numbers or symbols
  const midNumOrSymCount = (
    password
      .substring(1, password.length - 1)
      .match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/g) || []
  ).length;
  score += midNumOrSymCount * 2;

  // 6. meets the requirments (should only be added once all requirements are met)
  //  [1] at least 12 length
  //  [2] 1 uppercase letter
  //  [3] 1 lowercase letter
  //  [4] 1 number
  //  [5] 1 symbol
  const REQUIREMENTS_COUNT = 5;

  if (
    passwordLength >= RECOMMENDED_PASSWORD_LENGTH &&
    upperCaseCount > 0 &&
    lowerCaseCount > 0 &&
    numbersCount > 0 &&
    symbolsCount > 0
  ) {
    score += REQUIREMENTS_COUNT * 2;
  }

  /************* DEDUCTIONS *************/
  // 1. letters only
  if (/^[a-zA-Z]+$/.test(password)) score -= upperCaseCount + lowerCaseCount;

  // 2. numbers only
  if (/^\d+$/.test(password)) score -= numbersCount;

  // 3. repeated characters (case insenstive)
  score -= calculateRepeatCharsDeduction(password);

  // 4. consecutive uppercase letters
  const upperCaseConsecutiveCount = countConsecutiveMatches(password, /[A-Z]+/g);
  score -= upperCaseConsecutiveCount * 2;

  // 5. consecutive lowercase letters
  const lowerCaseConsecutiveCount = countConsecutiveMatches(password, /[a-z]+/g);
  score -= lowerCaseConsecutiveCount * 2;

  // 6. consecutive numbers
  const numberConsecutiveCount = countConsecutiveMatches(password, /\d+/g);
  score -= numberConsecutiveCount * 2;

  // 7. sequential letters (3+)
  const sequentialLettersCount = countSequentialLetters(password);
  score -= sequentialLettersCount * 3;

  // 8. sequential numbers (3+)
  const sequentialNumbersCount = countSequentialNumbers(password);
  score -= sequentialNumbersCount * 3;

  // 9. sequential symbols (3+)
  const sequentialSymbolCount = countSequentialSymbols(password);
  score -= sequentialSymbolCount * 3;

  // final score (capped with a min of 0 and max of 100)
  score = Math.min(Math.max(score, 0), 100);

  /* Calculate strength */
  if (score >= 90) {
    return { strength: PasswordStrength.STRONG, value: 4 };
  }

  if (score < 90 && score >= 60) {
    return { strength: PasswordStrength.MEDIUM, value: 3 };
  }

  if (score < 60 && score >= 30) {
    return { strength: PasswordStrength.WEAK, value: 2 };
  }

  return { strength: PasswordStrength.TOO_WEAK, value: 1 };
};

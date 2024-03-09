import { CHARACTERS } from '../generatePassword';

/**
 * Counts consecutive characters in a password
 */
const countConsecutiveChars = (password: string, pattern: RegExp) => {
  if (!password) return 0;

  const consecutiveMatches = password.match(pattern);

  return consecutiveMatches
    ? consecutiveMatches
        .filter((value) => value.length > 1)
        .reduce((total, match) => total + (match.length - 1), 0)
    : 0;
};

export const countConsecutiveUCLetters = (password: string) =>
  countConsecutiveChars(password, /[A-Z]+/g);
export const countConsecutiveLCLetters = (password: string) =>
  countConsecutiveChars(password, /[a-z]+/g);
export const countConsecutiveNumbers = (password: string) =>
  countConsecutiveChars(password, /\d+/g);

/**
 * Counts sequential characters in a password
 */
const SEQUENTIAL_CHAR_LENGTH = 3;

const countSequentialChars = (password: string, orderOfCharacters: string) => {
  let sequentialLettersCount = 0;

  if (!password) return sequentialLettersCount;

  const strArr = password.toLowerCase().split('');

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

export const countSequentialLetters = (password: string) =>
  countSequentialChars(password, CHARACTERS.LOWERCASE_LETTERS);

export const countSequentialNumbers = (password: string) =>
  countSequentialChars(password, CHARACTERS.NUMBERS);

export const countSequentialSymbols = (password: string) =>
  countSequentialChars(password, CHARACTERS.SYMBOLS);

/**
 * Counts repeated character in a password and calculates its deduction
 */

export const calculateRepeatCharsDeduction = (password: string) => {
  if (!password) return 0;

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

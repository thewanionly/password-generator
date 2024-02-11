export const DEFAULT_PASSWORD_LENGTH = 12;
export const PASSWORD_REGEX = {
  UPPERCASE_LETTERS: /[A-Z]/,
  LOWERCASE_LETTERS: /[a-z]/,
  NUMBERS: /\d/,
  SYMBOLS: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  ALL: /[a-zA-Z\d[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
};

export const CHARACTERS = {
  UPPERCASE_LETTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LOWERCASE_LETTERS: 'abcdefghijklmnopqrstuvwxyz',
  NUMBERS: '0123456789',
  SYMBOLS: '!@#$%^&*()_+\\-=[]{};\'":\\\\|,.<>/?~',
};

export const DEFAULT_PASSWORD_LENGTH = 12;
export const PASSWORD_REGEX = {
  UPPERCASE_LETTERS: /^[A-Z]+$/,
  LOWERCASE_LETTERS: /^[a-z]+$/,
  NUMBERS: /^\d+$/,
  SYMBOLS: /^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
  NUM_SYM: /^[\d[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
  LCASE_SYM: /^[a-z[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
  LCASE_NUM: /^[a-z\d]+$/,
  LCASE_NUM_SYM: /^[a-z\d[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
  UCASE_SYM: /^[A-Z[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
  UCASE_NUM: /^[A-Z\d]+$/,
  UCASE_NUM_SYM: /^[A-Z\d[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
  UCASE_LCASE: /^[a-zA-Z]+$/,
  UCASE_LCASE_SYM: /^[a-zA-Z[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
  UCASE_LCASE_NUM: /^[a-zA-Z\d]+$/,
  ALL: /^[a-zA-Z\d[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]+$/,
};

export const CHARACTERS = {
  UPPERCASE_LETTERS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LOWERCASE_LETTERS: 'abcdefghijklmnopqrstuvwxyz',
  NUMBERS: '0123456789',
  SYMBOLS: '!@#$%^&*()_+\\-=[]{};\'":\\\\|,.<>/?~',
};

export const INVALID_INPUT_ERROR_MESSAGES = {
  LENGTH: '`length` parameter must be greater than 0',
  OPTIONS: 'At least one option must be enabled',
};

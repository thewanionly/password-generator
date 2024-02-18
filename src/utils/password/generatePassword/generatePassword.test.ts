import { DEFAULT_PASSWORD_LENGTH } from '@/constants/password';

import { generatePassword } from './generatePassword';
import { INVALID_INPUT_ERROR_MESSAGES, PASSWORD_REGEX } from './generatePassword.constants';

describe('generatePassword', () => {
  describe('no arguments passed', () => {
    it(`generates password with length of ${DEFAULT_PASSWORD_LENGTH} and includes all options by default`, () => {
      const password = generatePassword();

      expect(password).toHaveLength(DEFAULT_PASSWORD_LENGTH);
      expect(password).toMatch(PASSWORD_REGEX.ALL);
    });
  });

  describe('invalid inputs', () => {
    it('throws an error when length is 0', () => {
      expect(() => generatePassword(0)).toThrow(INVALID_INPUT_ERROR_MESSAGES.LENGTH);
    });

    it('throws an error when all options are false', () => {
      expect(() =>
        generatePassword(12, {
          withUpperCase: false,
          withLowerCase: false,
          withNumbers: false,
          withSymbols: false,
        })
      ).toThrow(INVALID_INPUT_ERROR_MESSAGES.OPTIONS);
    });
  });

  describe('length specified', () => {
    it('generates password with specified length and includes all options when no options is passed', () => {
      const length = 8;
      const password = generatePassword(length);

      expect(password).toHaveLength(length);
      expect(password).toMatch(PASSWORD_REGEX.ALL);
    });

    it(`generates password with specified length and includes only the specified option passed`, () => {
      const length = 20;
      const options = { withNumbers: true };
      const password = generatePassword(length, options);

      expect(password).toHaveLength(length);
      expect(password).toMatch(PASSWORD_REGEX.NUMBERS);
    });
  });

  describe('options specified', () => {
    it.each`
      description                                       | regExPattern                        | withUpperCase | withLowerCase | withNumbers | withSymbols
      ${'symbols only'}                                 | ${PASSWORD_REGEX.SYMBOLS}           | ${false}      | ${false}      | ${false}    | ${true}
      ${'numbers only'}                                 | ${PASSWORD_REGEX.NUMBERS}           | ${false}      | ${false}      | ${true}     | ${false}
      ${'numbers and symbols'}                          | ${PASSWORD_REGEX.NUM_SYM}           | ${false}      | ${false}      | ${true}     | ${true}
      ${'lowercase letters only'}                       | ${PASSWORD_REGEX.LOWERCASE_LETTERS} | ${false}      | ${true}       | ${false}    | ${false}
      ${'lowercase letters and symbols'}                | ${PASSWORD_REGEX.LCASE_SYM}         | ${false}      | ${true}       | ${false}    | ${true}
      ${'lowercase letters and numbers'}                | ${PASSWORD_REGEX.LCASE_NUM}         | ${false}      | ${true}       | ${true}     | ${false}
      ${'lowercase letters, numbers, and symbols'}      | ${PASSWORD_REGEX.LCASE_NUM_SYM}     | ${false}      | ${true}       | ${true}     | ${true}
      ${'uppercase letters only'}                       | ${PASSWORD_REGEX.UPPERCASE_LETTERS} | ${true}       | ${false}      | ${false}    | ${false}
      ${'uppercase letters and symbols'}                | ${PASSWORD_REGEX.UCASE_SYM}         | ${true}       | ${false}      | ${false}    | ${true}
      ${'uppercase letters and numbers'}                | ${PASSWORD_REGEX.UCASE_NUM}         | ${true}       | ${false}      | ${true}     | ${false}
      ${'uppercase letters, numbers, and symbols'}      | ${PASSWORD_REGEX.UCASE_NUM_SYM}     | ${true}       | ${false}      | ${true}     | ${true}
      ${'uppercase and lowecase letters'}               | ${PASSWORD_REGEX.UCASE_LCASE}       | ${true}       | ${true}       | ${false}    | ${false}
      ${'uppercase and lowercase letters, and symbols'} | ${PASSWORD_REGEX.UCASE_LCASE_SYM}   | ${true}       | ${true}       | ${false}    | ${true}
      ${'uppercase and lowercase letters, and numbers'} | ${PASSWORD_REGEX.UCASE_LCASE_NUM}   | ${true}       | ${true}       | ${true}     | ${false}
      ${'all options as specified'}                     | ${PASSWORD_REGEX.ALL}               | ${true}       | ${true}       | ${true}     | ${true}
    `(
      `generates password with length of ${DEFAULT_PASSWORD_LENGTH} and includes $description`,
      ({ regExPattern, withUpperCase, withLowerCase, withNumbers, withSymbols }) => {
        const options = {
          withUpperCase,
          withLowerCase,
          withNumbers,
          withSymbols,
        };
        const password = generatePassword(undefined, options);

        expect(password).toHaveLength(DEFAULT_PASSWORD_LENGTH);
        expect(password).toMatch(regExPattern);
      }
    );
  });
});

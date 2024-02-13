import { checkPasswordStrength } from './checkPasswordStrength';
import { PasswordStrength } from './checkPasswordStrength.constants';

describe('checkPasswordStrength', () => {
  describe('invalid input', () => {
    it(`returns null when password is empty`, () => {
      const result = checkPasswordStrength('');

      expect(result).toBe(null);
    });
  });

  describe('different strengths', () => {
    xit('returns "too weak" and a value of ... when password has ...', () => {
      const { strength, value } = checkPasswordStrength('aws') ?? {};

      // TODO:
      expect(strength).toBe(PasswordStrength.TOO_WEAK);
      expect(value).toBe(1);
    });

    xit('returns "weak" and a value of ... when password has ...', () => {
      const { strength, value } = checkPasswordStrength('aws') ?? {};

      // TODO:
      expect(strength).toBe(PasswordStrength.WEAK);
      expect(value).toBe(2);
    });

    xit('returns "medium" and a value of ... when password has ...', () => {
      const { strength, value } = checkPasswordStrength('aws') ?? {};

      // TODO:
      expect(strength).toBe(PasswordStrength.MEDIUM);
      expect(value).toBe(3);
    });

    xit('returns "strong" and a value of ... when password has ...', () => {
      const { strength, value } = checkPasswordStrength('aws') ?? {};

      // TODO:
      expect(strength).toBe(PasswordStrength.STRONG);
      expect(value).toBe(4);
    });
  });
});

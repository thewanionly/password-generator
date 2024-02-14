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
    it('returns "too weak" and a value of 1 when password has length of 3 and only one rule is applied', () => {
      const { strength, value } = checkPasswordStrength('abc') ?? {};

      expect(strength).toBe(PasswordStrength.TOO_WEAK);
      expect(value).toBe(1);
    });

    it('returns "weak" and a value of 2 when password has length of 6 and only one rule is applied', () => {
      const { strength, value } = checkPasswordStrength('abcdef') ?? {};

      expect(strength).toBe(PasswordStrength.WEAK);
      expect(value).toBe(2);
    });

    it('returns "medium" and a value of 3 when password has length of 9 and only two rules are applied', () => {
      const { strength, value } = checkPasswordStrength('abcABCdeF') ?? {};

      expect(strength).toBe(PasswordStrength.MEDIUM);
      expect(value).toBe(3);
    });

    it('returns "medium" and a value of 4 when password has length of 12 and all rules are applied', () => {
      const { strength, value } = checkPasswordStrength('abcABC123#$%aB9') ?? {};

      expect(strength).toBe(PasswordStrength.STRONG);
      expect(value).toBe(4);
    });
  });
});

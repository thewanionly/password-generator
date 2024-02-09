import { composeStories, render, screen, within } from '@/tests/utils';

import { PASSWORD_CHARACTER_LENGTH_LABEL } from '../PasswordCharLengthSlider';
import { PASSWORD_STRENGTH_LABEL } from '../PasswordStrengthMeter';
import { PASSWORD_GENERATOR, PASSWORD_RULES } from './PasswordGenerator.constants';
import * as PasswordGeneratorStories from './PasswordGenerator.stories';

const { Empty } = composeStories(PasswordGeneratorStories);

describe('PasswordGenerator', () => {
  describe('Layout', () => {
    it('displays password generator title', () => {
      render(<Empty />);

      const title = screen.getByRole('heading', { name: PASSWORD_GENERATOR.TITLE });

      expect(title).toBeInTheDocument();
    });

    it('displays an empty copyable text', () => {
      render(<Empty />);

      const placeHolder = screen.getByText(PASSWORD_GENERATOR.COPYABLE_TEXT_PLACEHOLDER);

      expect(placeHolder).toBeInTheDocument();
    });

    it('displays a disabled copy button icon', () => {
      render(<Empty />);

      const copyBtnIcon = screen.getByRole('button', { name: 'copy value' });

      expect(copyBtnIcon).toBeInTheDocument();
      expect(copyBtnIcon).toBeDisabled();
    });

    it('displays password character length label', () => {
      render(<Empty />);

      const label = screen.getByText(PASSWORD_CHARACTER_LENGTH_LABEL);

      expect(label).toBeInTheDocument();
    });

    it('displays password character length value as "0"', () => {
      render(<Empty />);

      const emptyValue = screen.getByText('0');

      expect(emptyValue).toBeInTheDocument();
    });

    it('displays the password character length slider at min value', () => {
      render(<Empty />);

      const slider = screen.getByRole('slider');

      expect(slider).toBeInTheDocument();
      expect(slider).toBeEnabled();

      // Use toHaveAttribute for now since aria-valuenow is not being checked in toHaveValue
      // Reference: https://github.com/testing-library/jest-dom/issues/478
      expect(slider).toHaveAttribute('aria-valuenow', '0');
    });

    it.each(PASSWORD_RULES.map(({ label }) => ({ label })))(
      `displays an unchecked "$label" checkbox`,
      ({ label }) => {
        render(<Empty />);

        const checkbox = screen.getByRole('checkbox', { name: label });

        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
      }
    );

    it('displays password strength label', () => {
      render(<Empty />);

      const strengthLabel = screen.getByText(PASSWORD_STRENGTH_LABEL);

      expect(strengthLabel).toBeInTheDocument();
    });

    it(`displays 4 empty meter bars`, () => {
      render(<Empty />);

      const meter = screen.getByRole('meter');
      const bars = within(meter).getAllByTestId('meter-bar');

      expect(bars).toHaveLength(4);
    });

    it('displays a disabled generate button by default', () => {
      render(<Empty />);

      const generateBtn = screen.getByRole('button', { name: PASSWORD_GENERATOR.BUTTON_LABEL });

      expect(generateBtn).toBeInTheDocument();
      expect(generateBtn).toBeDisabled();
    });
  });
});

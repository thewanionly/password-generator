import { composeStories, render, screen } from '@/tests/utils';

import { REQUIRED_SYMBOL } from './FormControlLabel.consants';
import * as FormControlLabelStories from './FormControlLabel.stories';

const { CheckboxWithLabel, DisabledCheckboxWithLabel, RquiredCheckboxWithLabel } =
  composeStories(FormControlLabelStories);

describe('FormControlLabel', () => {
  describe('Checkbox with label', () => {
    it('displays an enabled checkbox with label', () => {
      render(<CheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(CheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeEnabled();
      expect(label).toBeInTheDocument();
    });

    it('displays a disabled checkbox with label', () => {
      render(<DisabledCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(CheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeDisabled();
      expect(label).toBeInTheDocument();
    });

    it('displays a required checkbox with label', () => {
      render(<RquiredCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(
        `${CheckboxWithLabel.args.label} ${REQUIRED_SYMBOL}` ?? ''
      );

      expect(checkbox).toBeInTheDocument();
      // Disable this rule since toBeRequired does not work in button with checkbox (https://github.com/testing-library/jest-dom/issues/481)
      // eslint-disable-next-line jest-dom/prefer-required
      expect(checkbox).toHaveAttribute('aria-required', 'true');
      expect(label).toBeInTheDocument();
    });
  });
});

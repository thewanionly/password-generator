import { composeStories, render, screen, userEvent } from '@/tests/utils';

import { REQUIRED_SYMBOL } from './FormControlLabel.consants';
import * as FormControlLabelStories from './FormControlLabel.stories';

const {
  UncheckedCheckboxWithLabel,
  CheckedCheckboxWithLabel,
  DisabledUncheckedCheckboxWithLabel,
  DisabledCheckedCheckboxWithLabel,
  RequiredCheckboxWithLabel,
} = composeStories(FormControlLabelStories);

describe('FormControlLabel', () => {
  describe('Checkbox with label', () => {
    it('displays an enabled unchecked checkbox with label', () => {
      render(<UncheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(UncheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
      expect(checkbox).toBeEnabled();
      expect(label).toBeInTheDocument();
    });

    it('displays an enabled checked checkbox with label', () => {
      render(<CheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(CheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
      expect(checkbox).toBeEnabled();
      expect(label).toBeInTheDocument();
    });

    it('displays a disabled unchecked checkbox with label', () => {
      render(<DisabledUncheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(DisabledUncheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
      expect(checkbox).toBeDisabled();
      expect(label).toBeInTheDocument();
    });

    it('displays a disabled checked checkbox with label', () => {
      render(<DisabledCheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(DisabledCheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toBeChecked();
      expect(checkbox).toBeDisabled();
      expect(label).toBeInTheDocument();
    });

    it('displays a required checkbox with label', () => {
      render(<RequiredCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(
        `${RequiredCheckboxWithLabel.args.label} ${REQUIRED_SYMBOL}` ?? ''
      );

      expect(checkbox).toBeInTheDocument();
      // Disable this rule since toBeRequired does not work in button with checkbox (https://github.com/testing-library/jest-dom/issues/481)
      // eslint-disable-next-line jest-dom/prefer-required
      expect(checkbox).toHaveAttribute('aria-required', 'true');
      expect(label).toBeInTheDocument();
    });

    it(`ticks the checkbox when the label is clicked and it's currently unticked`, async () => {
      render(<UncheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(UncheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).not.toBeChecked();

      await userEvent.click(label);

      expect(checkbox).toBeChecked();
    });

    it(`unticks the checkbox when the label is clicked and it's currently ticked`, async () => {
      render(<CheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(CheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeChecked();

      await userEvent.click(label);

      expect(checkbox).not.toBeChecked();
    });

    it(`does not tick a disabled checkbox when the label is clicked and it's currently unticked`, async () => {
      render(<DisabledUncheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(DisabledUncheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).not.toBeChecked();

      await userEvent.click(label);

      expect(checkbox).not.toBeChecked();
    });

    it(`does not untick a disabled checkbox when the label is clicked and it's currently ticked`, async () => {
      render(<DisabledCheckedCheckboxWithLabel />);

      const checkbox = screen.getByRole('checkbox');
      const label = screen.getByLabelText(DisabledCheckedCheckboxWithLabel.args.label ?? '');

      expect(checkbox).toBeChecked();

      await userEvent.click(label);

      expect(checkbox).toBeChecked();
    });
  });
});

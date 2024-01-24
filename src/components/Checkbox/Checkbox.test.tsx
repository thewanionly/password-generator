import { composeStories, render, screen, userEvent } from '@/tests/utils';

import * as CheckboxStories from './Checkbox.stories';

const { Unchecked, Checked, DisabledUnchecked, DisabledChecked, WithLabelUnchecked } =
  composeStories(CheckboxStories);

describe('Checkbox', () => {
  it('displays an enabled unchecked checkbox', () => {
    render(<Unchecked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeEnabled();
  });

  it('displays an enabled checked checkbox', () => {
    render(<Checked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeEnabled();
  });

  it('displays a disabled unchecked checkbox', () => {
    render(<DisabledUnchecked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  it('displays a disabled checked checkbox', () => {
    render(<DisabledChecked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  });

  it(`ticks the checkbox when it is clicked and it's currently unticked`, async () => {
    render(<Unchecked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it(`unticks the checkbox when it is clicked and it's currently ticked`, async () => {
    render(<Checked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it(`does not tick a disabled checkbox when it is clicked and it's currently unticked`, async () => {
    render(<DisabledUnchecked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it(`does not untick a disabled checkbox when it is clicked and it's currently ticked`, async () => {
    render(<DisabledChecked />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('displays the checkbox with label', () => {
    render(<WithLabelUnchecked />);

    const checkboxWithLabel = screen.getByLabelText(WithLabelUnchecked.args.label ?? '');

    expect(checkboxWithLabel).toBeInTheDocument();
  });
});

import { composeStories, render, screen, within } from '@/tests/utils';

import * as PasswordStrengthMeterStories from './PasswordStrengthMeter.stories';

const { Empty, TooWeak, Weak, Medium, Strong } = composeStories(PasswordStrengthMeterStories);

describe('PasswordStrengthMeter', () => {
  it(`displays 4 meter bars`, () => {
    render(<Empty />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).getAllByTestId('meter-bar');

    expect(bars).toHaveLength(4);
  });

  it(`displays an empty strength meter`, () => {
    render(<Empty />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(0));
    expect(bars).toHaveLength(0);
  });

  it(`displays a "too weak" strength meter`, () => {
    render(<TooWeak />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(1));
    expect(bars).toHaveLength(1);
  });

  it(`displays a "weak" strength meter`, () => {
    render(<Weak />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(3));
    expect(bars).toHaveLength(2);
  });

  it(`displays a "medium" strength meter`, () => {
    render(<Medium />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(4));
    expect(bars).toHaveLength(3);
  });

  it(`displays a "strong" strength meter`, () => {
    render(<Strong />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(5));
    expect(bars).toHaveLength(4);
  });
});

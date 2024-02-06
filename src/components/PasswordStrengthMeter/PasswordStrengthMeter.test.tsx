import { composeStories, render, screen, within } from '@/tests/utils';

import { MeterBarLevel } from '../Meter';
import { LEVEL_TO_STRENGTH_MAP, PASSWORD_STRENGTH_LABEL } from './PasswordStrengthMeter.constants';
import * as PasswordStrengthMeterStories from './PasswordStrengthMeter.stories';

const { Empty, TooWeak, Weak, Medium, Strong } = composeStories(PasswordStrengthMeterStories);

describe('PasswordStrengthMeter', () => {
  it(`displays "Strength" label`, () => {
    render(<Empty />);

    const strengthLabel = screen.getByText(PASSWORD_STRENGTH_LABEL);

    expect(strengthLabel).toBeInTheDocument();
  });

  it(`displays 4 meter bars`, () => {
    render(<Empty />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).getAllByTestId('meter-bar');

    expect(bars).toHaveLength(4);
  });

  it(`displays an empty strength meter with no label`, () => {
    render(<Empty />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(0));
    expect(bars).toHaveLength(0);
  });

  it(`displays a "too weak" strength meter with label`, () => {
    render(<TooWeak />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');
    const label = screen.getByText(LEVEL_TO_STRENGTH_MAP[MeterBarLevel.LOW]);

    expect(meter).toHaveAttribute('aria-valuenow', String(1));
    expect(bars).toHaveLength(1);
    expect(label).toBeInTheDocument();
  });

  it(`displays a "weak" strength meter with label`, () => {
    render(<Weak />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');
    const label = screen.getByText(LEVEL_TO_STRENGTH_MAP[MeterBarLevel.MODERATE]);

    expect(meter).toHaveAttribute('aria-valuenow', String(3));
    expect(bars).toHaveLength(2);
    expect(label).toBeInTheDocument();
  });

  it(`displays a "medium" strength meter with label`, () => {
    render(<Medium />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');
    const label = screen.getByText(LEVEL_TO_STRENGTH_MAP[MeterBarLevel.MEDIUM]);

    expect(meter).toHaveAttribute('aria-valuenow', String(4));
    expect(bars).toHaveLength(3);
    expect(label).toBeInTheDocument();
  });

  it(`displays a "strong" strength meter with label`, () => {
    render(<Strong />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).queryAllByTestId('meter-bar-filled');
    const label = screen.getByText(LEVEL_TO_STRENGTH_MAP[MeterBarLevel.HIGH]);

    expect(meter).toHaveAttribute('aria-valuenow', String(5));
    expect(bars).toHaveLength(4);
    expect(label).toBeInTheDocument();
  });
});

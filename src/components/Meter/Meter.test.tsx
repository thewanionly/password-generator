import { composeStories, render, screen, within } from '@/tests/utils';

import * as MeterStories from './Meter.stories';

const { MeterEmpty, MeterLow, MeterModerate, MeterMedium, MeterHigh } =
  composeStories(MeterStories);

describe('Meter', () => {
  it(`displays as many bars as inidcated in the "numOfBars" prop`, () => {
    render(<MeterEmpty />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).getAllByTestId('meter-bar');

    expect(bars).toHaveLength(MeterEmpty.args.numOfBars as number);
  });

  it(`displays an empty meter component`, () => {
    render(<MeterEmpty />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(0));
    expect(filledBars).toHaveLength(0);
  });

  it(`displays meter component at low level`, () => {
    render(<MeterLow />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(MeterLow.args.value as number));
    expect(filledBars).toHaveLength(1);
  });

  it(`displays meter component at moderate level`, () => {
    render(<MeterModerate />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(MeterModerate.args.value as number));
    expect(filledBars).toHaveLength(2);
  });

  it(`displays meter component at medium level`, () => {
    render(<MeterMedium />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(MeterMedium.args.value as number));
    expect(filledBars).toHaveLength(3);
  });

  it(`displays meter component at high level`, () => {
    render(<MeterHigh />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(MeterHigh.args.max));
    expect(filledBars).toHaveLength(MeterHigh.args.numOfBars as number);
  });
});

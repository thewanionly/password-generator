import { composeStories, render, screen, within } from '@/tests/utils';

import * as MeterStories from './Meter.stories';

const { MeterEmpty, Meter25, Meter50, Meter75, MeterFull } = composeStories(MeterStories);

describe('Meter', () => {
  it(`displays as many bars as inidcated in the "numOfBars" prop`, () => {
    render(<MeterEmpty />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).getAllByTestId('meter-bar');

    expect(bars).toHaveLength(MeterEmpty.args.numOfBars as number);
  });

  it(`displays meter component at 0%`, () => {
    render(<MeterEmpty />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).queryAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(0));
    expect(filledBars).toHaveLength(0);
  });

  it(`displays meter component at 25%`, () => {
    render(<Meter25 />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String((Meter25.args.max as number) * 0.25));
    expect(filledBars).toHaveLength(Math.floor((Meter25.args.numOfBars as number) * 0.25));
  });

  it(`displays meter component at 50%`, () => {
    render(<Meter50 />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String((Meter50.args.max as number) * 0.5));
    expect(filledBars).toHaveLength(Math.floor((Meter50.args.numOfBars as number) * 0.5));
  });

  it(`displays meter component at 75%`, () => {
    render(<Meter75 />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String((Meter75.args.max as number) * 0.75));
    expect(filledBars).toHaveLength(Math.floor((Meter75.args.numOfBars as number) * 0.75));
  });

  it(`displays meter component at 100%`, () => {
    render(<MeterFull />);

    const meter = screen.getByRole('meter');
    const filledBars = within(meter).getAllByTestId('meter-bar-filled');

    expect(meter).toHaveAttribute('aria-valuenow', String(MeterFull.args.max));
    expect(filledBars).toHaveLength(MeterFull.args.numOfBars as number);
  });
});

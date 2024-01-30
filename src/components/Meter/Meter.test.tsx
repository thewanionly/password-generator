import { composeStories, render, screen, within } from '@/tests/utils';

import * as MeterStories from './Meter.stories';

const { MeterEmpty } = composeStories(MeterStories);

describe('Meter', () => {
  it(`displays as many bars as inidcated in the "numOfBars" prop`, () => {
    render(<MeterEmpty />);

    const meter = screen.getByRole('meter');
    const bars = within(meter).getAllByTestId('meter-bar');

    expect(bars).toHaveLength(MeterEmpty.args.numOfBars as number);
  });
});

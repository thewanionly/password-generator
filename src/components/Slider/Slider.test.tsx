import { composeStories, render, screen } from '@/tests/utils';

import * as SliderStories from './Slider.stories';

const { EnabledSlider, EnabledSliderMax, EnabledSliderMin, DisabledSlider } =
  composeStories(SliderStories);

describe('Slider', () => {
  it('displays an enabled slider at mid value', () => {
    render(<EnabledSlider />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toBeEnabled();

    // Use toHaveAttribute for now since aria-valuenow is not being checked in toHaveValue
    // Reference: https://github.com/testing-library/jest-dom/issues/478
    expect(slider).toHaveAttribute(
      'aria-valuenow',
      (EnabledSlider.args.defaultValue as number[])[0].toString()
    );
  });

  it('displays an enabled slider at max value', () => {
    render(<EnabledSliderMax />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toBeEnabled();
    expect(slider).toHaveAttribute(
      'aria-valuenow',
      (EnabledSliderMax.args.max as number).toString()
    );
  });

  it('displays an enabled slider at min value', () => {
    render(<EnabledSliderMin />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toBeEnabled();
    expect(slider).toHaveAttribute(
      'aria-valuenow',
      (EnabledSliderMax.args.min as number).toString()
    );
  });

  it('displays a disabled slider', () => {
    render(<DisabledSlider />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('data-disabled');
  });

  // TODO: testing of interactions with the slider
  // Currently there's no way to test/simulate how a user would interact a slider using jest and RTL.
});

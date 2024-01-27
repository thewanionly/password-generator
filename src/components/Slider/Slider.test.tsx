import { composeStories, render, screen } from '@/tests/utils';

import * as SliderStories from './Slider.stories';

const { EnabledSlider, DisabledSlider } = composeStories(SliderStories);

describe('Slider', () => {
  it('displays an enabled slider', () => {
    render(<EnabledSlider />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toBeEnabled();
  });

  it('displays a disabled slider', () => {
    render(<DisabledSlider />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('data-disabled');
  });
});

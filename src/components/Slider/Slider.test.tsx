import { composeStories, render, screen } from '@/tests/utils';

import * as SliderStories from './Slider.stories';

const { EnabledSlider } = composeStories(SliderStories);

describe('Slider', () => {
  it('displays an enabled slider', () => {
    render(<EnabledSlider />);

    const slider = screen.getByRole('slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toBeEnabled();
  });
});

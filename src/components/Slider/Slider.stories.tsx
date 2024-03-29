import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof Slider> = {
  component: Slider,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof Slider>;

export const EnabledSlider: Story = {
  args: {
    className: 'w-[60%]',
    defaultValue: [10],
    max: 20,
    min: 1,
    step: 1,
  },
};

export const EnabledSliderMax: Story = {
  args: {
    className: 'w-[60%]',
    defaultValue: [20],
    max: 20,
    min: 1,
    step: 1,
  },
};

export const EnabledSliderMin: Story = {
  args: {
    className: 'w-[60%]',
    defaultValue: [1],
    max: 20,
    min: 1,
    step: 1,
  },
};

export const DisabledSlider: Story = {
  args: {
    className: 'w-[60%]',
    defaultValue: [10],
    max: 20,
    min: 1,
    disabled: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { Meter } from './Meter';
import { DEFAULT_NUM_OF_BARS } from './Meter.constants';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof Meter> = {
  component: Meter,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof Meter>;

export const MeterEmpty: Story = {
  args: {
    numOfBars: DEFAULT_NUM_OF_BARS,
  },
};

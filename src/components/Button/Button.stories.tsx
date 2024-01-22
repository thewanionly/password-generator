import type { Meta, StoryObj } from '@storybook/react';

import { ArrowRight } from '@/components/Icon';

import { Button } from './Button';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Primary</Button>,
};

export const WithIcon: Story = {
  render: () => (
    <Button className="flex items-center gap-6">
      Primary <ArrowRight className="w-3" title="arrow right" />
    </Button>
  ),
};

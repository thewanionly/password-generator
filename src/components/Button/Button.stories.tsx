import type { Meta, StoryObj } from '@storybook/react';

import { ArrowRight, Copy } from '@/components/Icon';

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

export const Enabled: Story = {
  render: (args) => <Button {...args}>Enabled</Button>,
};

export const Disabled: Story = {
  render: (args) => (
    <Button disabled {...args}>
      Disabled
    </Button>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button className="flex items-center gap-6">
      Enabled <ArrowRight className="w-3" title="arrow right" />
    </Button>
  ),
};

export const WithIconDisabled: Story = {
  render: () => (
    <Button className="flex items-center gap-6" disabled>
      Disabled <ArrowRight className="w-3" title="arrow right" />
    </Button>
  ),
};

export const Ghost: Story = {
  render: () => (
    <Button className="flex items-center gap-6" variant="ghost">
      <Copy className="h-8 w-8 text-green" title="copy" />
    </Button>
  ),
};

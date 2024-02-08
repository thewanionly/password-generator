import type { Meta, StoryObj } from '@storybook/react';

import { PasswordGenerator, PasswordGeneratorProps } from './PasswordGenerator';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof PasswordGenerator> = {
  component: PasswordGenerator,
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof PasswordGenerator>;

const ControlledPasswordGenerator = (props: PasswordGeneratorProps) => {
  return <PasswordGenerator className="min-w-[375px] max-w-[566px]" {...props} />;
};

export const Empty: Story = {
  render: (args) => <ControlledPasswordGenerator {...args} />,
};

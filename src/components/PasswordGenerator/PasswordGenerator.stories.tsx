import type { Meta, StoryObj } from '@storybook/react';

import { PasswordGenerator } from './PasswordGenerator';
import { PASSWORD_RULES } from './PasswordGenerator.constants';

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

const commonArgs = { className: ' min-w-[375px] max-w-[566px] ' };

export const Empty: Story = {
  args: { ...commonArgs },
};

export const TooWeak: Story = {
  args: {
    ...commonArgs,
    initialCharLength: 1,
    initialAppliedRules: new Set([PASSWORD_RULES[0].value]),
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { PasswordGenerator } from './PasswordGenerator';

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

const commonArgs = { className: ' min-w-[375px] max-w-[566px] p-4' };

export const Empty: Story = {
  args: { ...commonArgs },
};

export const HasLength: Story = {
  args: {
    ...commonArgs,
    initialCharLength: 10,
  },
};

export const HasLengthAndRules: Story = {
  args: {
    ...commonArgs,
    initialCharLength: 10,
    initialAppliedRules: {
      withLowerCase: true,
      withUpperCase: true,
    },
  },
};

export const Max: Story = {
  args: {
    ...commonArgs,
    initialCharLength: 20,
    initialAppliedRules: {
      withLowerCase: true,
      withUpperCase: true,
      withNumbers: true,
      withSymbols: true,
    },
  },
};

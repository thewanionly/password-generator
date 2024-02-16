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
    initialAppliedRules: new Set([
      PASSWORD_RULES.withLowerCase.value,
      PASSWORD_RULES.withUpperCase.value,
    ]),
  },
};

export const Max: Story = {
  args: {
    ...commonArgs,
    initialCharLength: 20,
    initialAppliedRules: new Set([
      PASSWORD_RULES.withLowerCase.value,
      PASSWORD_RULES.withUpperCase.value,
      PASSWORD_RULES.withNumbers.value,
      PASSWORD_RULES.withSymbols.value,
    ]),
  },
};

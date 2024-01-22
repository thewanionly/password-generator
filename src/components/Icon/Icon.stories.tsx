import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from '@/components/Icon';

/**
 * The default export defines how Storybook lists our stories in the preview
 * Reference: https://storybook.js.org/docs/writing-stories#default-export
 */
const meta: Meta<typeof Icons> = {
  title: 'Components/Icon',
};

export default meta;

/**
 * The named export defines the component's stories
 * Reference: https://storybook.js.org/docs/writing-stories#defining-stories
 */

type Story = StoryObj<typeof Icons>;

export const AllIcons: Story = {
  render: () => (
    <div className="flex gap-[50px]">
      {Object.entries(Icons).map(([name, IconComponent]) => (
        <div key={name} className="flex flex-col items-center">
          <IconComponent className="mb-3 h-8 w-8" title={name} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};

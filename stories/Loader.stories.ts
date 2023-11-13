import type { Meta, StoryObj } from '@storybook/react';
import Loader from '../app/shared/Loader';


const meta = {
    title: 'ATOMS/Loader',
    component: Loader,
  } satisfies Meta<typeof Loader>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const component: Story = {
    args: {
      open:true
    },
  };
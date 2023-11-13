import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../app/Footer';

const meta = {
    title: 'MOLECULES/Footer',
    component: Footer,
    parameters: {
    },
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  } satisfies Meta<typeof Footer>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const component: Story = {
    args: {
      
    },
  };
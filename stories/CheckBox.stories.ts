import type { Meta, StoryObj } from '@storybook/react';
import {MyCheckBox} from '../app/shared/MyCheckBox';


const meta = {
    title: 'ATOMS/CheckBox',
    component: MyCheckBox,
    parameters: {
        layout: 'centered',
      },
  } satisfies Meta<typeof MyCheckBox>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const component: Story = {
    args: {
       
    },
  };
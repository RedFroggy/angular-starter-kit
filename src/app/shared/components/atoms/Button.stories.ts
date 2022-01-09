// button.stories.ts

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';

export default {
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  title: 'Button',
  excludeStories: /.*Data$/,
  argTypes: {
    size: {
      options: ['sm', 'xs', 'lg'],
      control: { type: 'radio' },
    },
    colorClass: {
      options: ['info', 'warning', 'danger', null],
      control: { type: 'radio' },
    },
    outlined: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} as Meta;

export const actionsData = {
  clicked: action('clicked'),
};

// We create a “template” of how args map to rendering
const Template: Story = (args) => ({
  props: args,
  clicked: actionsData.clicked,
});

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  label: 'Default button',
  colorClass: 'info',
  primary: false,
  outlined: false,
  clicked: actionsData.clicked,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary button',
  colorClass: null,
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary button',
  colorClass: null,
  primary: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Outlined button',
  colorClass: 'danger',
  primary: false,
  outlined: true,
};

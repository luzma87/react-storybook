import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  primary: true,
  size: 'large',
  label: 'Primary Button Large',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  primary: true,
  size: 'small',
  label: 'Primary Button Small',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  size: 'large',
  label: 'Secondary Button Large',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  size: 'small',
  label: 'Secondary Button Small',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  size: 'small',
  label: 'Full Width Button',
  fullWidth: true
};

import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  label: 'Light Button',
};

export const LightDeactive = Template.bind({});
LightDeactive.args = {
  label: 'Light Button',
  deactive: true,
};

export const LightLarge = Template.bind({});
LightLarge.args = {
  label: 'Large Button',
  size: 'large'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Dark Button',
  variant: 'dark',
};

export const DarkDeactive = Template.bind({});
DarkDeactive.args = {
  label: 'Dark Button',
  deactive: true,
  variant: 'dark',
};

export const DarkLarge = Template.bind({});
DarkLarge.args = {
  label: 'Large Button',
  size: 'large',
  variant: 'dark',
};

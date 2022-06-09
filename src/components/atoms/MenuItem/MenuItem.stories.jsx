import React from 'react';
import MenuItem from './MenuItem'

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
};

const Template = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};
export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected',
  isSelected: true
};

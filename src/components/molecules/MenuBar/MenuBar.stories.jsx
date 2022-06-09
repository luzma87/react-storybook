import React from 'react';

import { MenuBar } from './MenuBar';

export default {
  title: 'Molecules/MenuBar',
  component: MenuBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <MenuBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};
export const WithMenuItems = Template.bind({});
WithMenuItems.args = {
  user: {
    name: 'Jane Doe',
  },
  menuItems: [{label: 'Home', selected:true}, {label: 'About', selected:false}, {label: 'Contact', selected:false},]
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

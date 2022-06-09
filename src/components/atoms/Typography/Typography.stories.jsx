import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Atoms/Typography',
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Title = Template.bind({});
Title.args = {
  variant: 'title',
  children: 'Este Es Un Título'
};
export const Subtitle = Template.bind({});
Subtitle.args = {
  variant: 'subtitle',
  children: 'Este Es Un Subtítulo'
};
export const Highlight = Template.bind({});
Highlight.args = {
  variant: 'highlight',
  children: 'Este es un highlight'
};
export const Button = Template.bind({});
Button.args = {
  variant: 'button',
  children: 'Botón'
};
export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Este es un texto normal'
};
export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  children: 'Este es un caption'
};
export const Primary = Template.bind({});
Primary.args = {
  style: 'primary',
  children: 'Este es un texto primary'
};
export const Seconday = Template.bind({});
Seconday.args = {
  style: 'secondary',
  children: 'Este es un texto secondary'
};

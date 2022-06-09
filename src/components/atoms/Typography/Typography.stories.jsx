import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
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
export const Secondary = Template.bind({});
Secondary.args = {
  style: 'secondary',
  children: 'Este es un texto secondary'
};
export const Blue = Template.bind({});
Blue.args = {
  style: 'blue',
  children: 'Este es un texto blue'
};
export const Mustard = Template.bind({});
Mustard.args = {
  style: 'mustard',
  children: 'Este es un texto mustard'
};
export const CoralRed = Template.bind({});
CoralRed.args = {
  style: 'coral-red',
  children: 'Este es un texto coral-red'
};
export const LightBlue = Template.bind({});
LightBlue.args = {
  style: 'light-blue',
  children: 'Este es un texto light-blue'
};
export const LightMustard = Template.bind({});
LightMustard.args = {
  style: 'light-mustard',
  children: 'Este es un texto light-mustard'
};
export const White = Template.bind({});
White.args = {
  style: 'white',
  children: 'Este es un texto white'
};
export const Gray = Template.bind({});
Gray.args = {
  style: 'gray',
  children: 'Este es un texto gray'
};
export const Charcoal = Template.bind({});
Charcoal.args = {
  style: 'charcoal',
  children: 'Este es un texto charcoal'
};

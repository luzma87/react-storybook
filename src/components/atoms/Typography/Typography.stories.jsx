import React from 'react';
import { Typography } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
};

const TypographyGroup = ({children}) => {
  return (
    <div style={{display: 'grid', width: 'fit-content', gridGap: 8}}>
      {children}
    </div>
  )
}

const TypographyWrapper = ({variant, color, dark}) => {
  return (
    <div style={{border: 'solid 1px #666', padding: 8, background: dark ? '#333' : '#fff'}}>
      <Typography variant={variant} color={color}>
        {variant??color}
      </Typography>
    </div>
  )
}

export const AllSizes = () => (
  <TypographyGroup>
    <TypographyWrapper variant="title" />
    <TypographyWrapper variant="subtitle" />
    <TypographyWrapper variant="highlight" />
    <TypographyWrapper variant="button" />
    <TypographyWrapper variant="text" />
    <TypographyWrapper variant="caption" />
  </TypographyGroup>
)

export const AllColors = () => (
  <div style={{display:'flex', gap: 16}}>
    <TypographyGroup>
      <TypographyWrapper color="primary"/>
      <TypographyWrapper color="secondary"/>
      <TypographyWrapper color="blue"/>
      <TypographyWrapper color="mustard"/>
      <TypographyWrapper color="coral-red"/>
      <TypographyWrapper color="light-blue"/>
      <TypographyWrapper color="light-mustard"/>
      <TypographyWrapper color="white"/>
      <TypographyWrapper color="gray"/>
      <TypographyWrapper color="charcoal"/>
    </TypographyGroup>
    <TypographyGroup>
      <TypographyWrapper color="primary" dark/>
      <TypographyWrapper color="secondary" dark/>
      <TypographyWrapper color="blue" dark/>
      <TypographyWrapper color="mustard" dark/>
      <TypographyWrapper color="coral-red" dark/>
      <TypographyWrapper color="light-blue" dark/>
      <TypographyWrapper color="light-mustard" dark/>
      <TypographyWrapper color="white" dark/>
      <TypographyWrapper color="gray" dark/>
      <TypographyWrapper color="charcoal" dark/>
    </TypographyGroup>
  </div>
)

export const Demo = (args) => <Typography {...args} />
Demo.args = {
  children: 'Este Es Un Texto de demo'
};

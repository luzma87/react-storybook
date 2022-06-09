import React from 'react'
import Logo from './icons/Logo'
import AccountActive from './icons/AccountActive'
import AccountInactive from './icons/AccountInactive'
import MenuHamburger from './icons/MenuHamburger'
import './icons.css'

const Icon = ({icon, label}) => {
  return (<div className="icon-wrapper">
      {icon}
      {label}
    </div>)
}

export default {
  title: 'Icons',
  component: Icon,
  argTypes: {
    fill: { control: 'color' },
  },
}

const Template = ({fill}) => (<div className="icons-grid">
    <Icon icon={<Logo fill={fill}/>} label={'Logo'}/>
    <Icon icon={<AccountActive fill={fill}/>} label={'Account Active'}/>
    <Icon icon={<AccountInactive fill={fill}/>} label={'Account Inactive'}/>
    <Icon icon={<MenuHamburger fill={fill}/>} label={'Menu Hamburger'}/>
  </div>)

export const Icons = Template.bind({})
Icons.args = {
  fill: 'pink',
}

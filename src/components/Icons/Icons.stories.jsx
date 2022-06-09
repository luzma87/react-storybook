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
  title: 'Example/Icons',
  component: Icon,
}

const fill = '#666'

const Template = (args) => (<div className="icons-grid">
    <Icon icon={<Logo fill={fill}/>} label={'Logo'}/>
    <Icon icon={<AccountActive fill={fill}/>} label={'Account Active'}/>
    <Icon icon={<AccountInactive fill={fill}/>} label={'Account Inactive'}/>
    <Icon icon={<MenuHamburger fill={fill}/>} label={'Menu Hamburger'}/>
  </div>)

export const Icons = Template.bind({})
Icons.args = {
  fill: 'pink',
}
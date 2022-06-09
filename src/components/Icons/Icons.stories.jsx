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
    size: { control: 'number' },
  },
}

export const Icons = ({fill, size}) => (<div className="icons-grid">
  <Icon icon={<Logo fill={fill} size={size} />} label={'Logo'}/>
  <Icon icon={<AccountActive fill={fill} size={size}/>} label={'Account Active'}/>
  <Icon icon={<AccountInactive fill={fill} size={size}/>} label={'Account Inactive'}/>
  <Icon icon={<MenuHamburger fill={fill} size={size}/>} label={'Menu Hamburger'}/>
</div>)
Icons.args = {
  fill: 'pink',
  size: 48
}

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../atoms/Button/Button';
import './menuBar.css';
import Logo from '../../Icons/icons/Logo'
import AccountInactive from '../../Icons/icons/AccountInactive'
import MenuItem from '../../atoms/MenuItem/MenuItem'

export const MenuBar = ({ user, menuItems, onMenuClick, onLogin,onCreateAccount, onLogout }) => (
  <header>
    <div className="container wrapper">
      <div className="container logo-container">
        <Logo fill="#1D1E41"/>
        <h1>Logo</h1>
      </div>
      <div className="container menu-items-container">
        {user && menuItems.map(item => <MenuItem key={item.label} label={item.label} isSelected={item.selected} onClick={()=>onMenuClick(item)}/>)}
      </div>
      <div className="container account-container">
        {user ? (
          <AccountInactive fill="#EFC01A" size={32} onClick={onLogout} />
        ) : (
          <>
            <Button backgroundColor="white" onClick={onCreateAccount} label="Signup"/>
            <Button primary onClick={onLogin} label="Log in" />
          </>
        )}
      </div>
    </div>
  </header>
);

MenuBar.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    selected:PropTypes.bool
  }))
};

MenuBar.defaultProps = {
  user: null,
  menuItems: [],
  onMenuClick: ()=>{}
};

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './header.css';
import Logo from '../Icons/icons/Logo'
import AccountInactive from '../Icons/icons/AccountInactive'
import MenuItem from '../MenuItem/MenuItem'

export const Header = ({ user, menuItems, onLogin,onCreateAccount, onLogout }) => (
  <header>
    <div className="container wrapper">
      <div className="container logo-container">
        <Logo fill="#1D1E41"/>
        <h1>Logo</h1>
      </div>
      <div className="container menu-items-container">
        {user && menuItems.map(item => <MenuItem label={item.label} isSelected={item.selected}/>)}
      </div>
      <div className="container account-container">
        {user ? (
          <AccountInactive fill="#EFC01A" size={32} onClick={onLogout} />
        ) : (
          <>
            <Button backgroundColor="white" size="small" onClick={onCreateAccount} label="Signup" />
            <Button primary size="small" onClick={onLogin} label="Log in" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    selected:PropTypes.bool
  }))
};

Header.defaultProps = {
  user: null,
  menuItems: []
};

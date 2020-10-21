import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { logout } from './../../redux/user/user.actions';

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    history.push('/');
  };

  const handleLoginClick = () => {
    history.push('/');
  };
  return (
    <div className="flex justify-between items-center content-center px-5 ">
      <div className="font-logo text-gray-700 text-5xl">Awesome Products</div>
      <div>
        {user.name && (
          <NavLink to="/profile"> User: {user.name.toUpperCase()}</NavLink>
        )}
        {user.auth ? (
          <button
            onClick={handleLogoutClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font py-1 px-2 border border-blue-700 rounded mx-3"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLoginClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font py-1 px-2 border border-blue-700 rounded mx-3"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;

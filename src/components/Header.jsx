/* eslint-disable indent */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header',{
    isLogin,
    isRegister,
  })

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          {
            hasUser ?
            <p>{user.email}</p>
            :
            <p>Perfil</p>
          }
        </div>
        <ul>
          {
            hasUser ? 
              <li><a href='/'>Cuenta</a></li>
            : null
          }

          {
            hasUser ?
              <li><a href='#logout' onClick={handleLogout}>Cerrar Sesón</a></li>

            : (
              <li>
                <Link to='login'>
                  Iniciar Sesión
                </Link>
              </li>
          )
          }
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispachToProps = {
  logoutRequest,
};

export default connect(mapStateToProps,mapDispachToProps)(Header);

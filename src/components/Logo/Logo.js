import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={ {height: props.height} }>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
)

export default logo;
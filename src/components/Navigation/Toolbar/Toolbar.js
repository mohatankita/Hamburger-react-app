import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawToggle from '../Sidedrawer/DrawToggle/DrawToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawToggle clicked={props.drawToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav> <NavigationItems /> </nav>
    </header>
)

export default toolbar;
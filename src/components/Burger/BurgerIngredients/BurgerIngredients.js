import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredients.module.css';

class BurgerIngredients extends Component {
    render() {
        let ingredient = null;
        switch(this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('paneer'):
                ingredient = <div className={classes.Paneer}></div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
            case ('potato'):
                ingredient = <div className={classes.Potato}></div>
                break;
            case ('salad'):
                ingredient = <div className={classes.Salad}></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;
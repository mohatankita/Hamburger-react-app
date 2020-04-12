import React, { Component } from 'react';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}</span> : {this.props.ingredients[igKey]}
                </li>
            );

        return (
            <Aux>
                <h3>Your Orders</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul> { ingredientSummary } </ul>
                <p> Continue to Checkout </p>
                <p><strong>Total Price : {this.props.price.toFixed(2)} </strong></p>
                <Button btnType="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continueOrder}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;
import React, { Component } from "react";

import Aux from "../../hoc/Auxilliary/Auxilliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    paneer: 1.3,
    potato: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => this.setState({ ingredients: response.data }))
            .catch(error => this.setState({ error: true }))
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
                        .map(igKey => ingredients[igKey])
                        .reduce( (sum, el) => { return sum + el }, 0);
        this.setState({ purchasable: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler =() => {
        
        const queryParameters = [];
        for( let i in this.state.ingredients ) {
            queryParameters.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParameters.push('price='+this.state.totalPrice);
        const queryString = queryParameters.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = { ...this.state.ingredients };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredient
        });
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredient = { ...this.state.ingredients };
        updatedIngredient[type] = updatedCount;
        const priceReduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceReduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredient
        });
        this.updatePurchaseState(updatedIngredient);
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        if(this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientsHandler}
                        ingredientRemoved={this.removeIngredientsHandler}
                        disabled={disabledInfo} price={this.state.totalPrice}
                        purchasable={this.state.purchasable} ordered={this.purchaseHandler} />
                </Aux>
            )
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                                    price={this.state.totalPrice}
                                    continueOrder={this.purchaseContinueHandler}
                                    cancelOrder={this.purchaseCancelHandler} />
        }
        if(this.state.loading) {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    { orderSummary }
                </Modal>
                { burger }
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
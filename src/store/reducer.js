import * as actionTypes from '../store/action';

const initialState = {
    ingredients: {
        salad: 0,
        paneer: 0,
        potato: 0,
        cheese: 0
    },
    totalPrice: 4
}

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    paneer: 1.3,
    potato: 0.7
};

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [ action.ingredientName ] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [ action.ingredientName ] : state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
            }
        default:
            return state;
    }
}

export default reducer;
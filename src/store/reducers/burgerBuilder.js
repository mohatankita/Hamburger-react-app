import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    paneer: 1.3,
    potato: 0.7
};

const addIngredient = ( state, action ) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
    }
    return updateObject(updatedState);
}

const removeIngredient = ( state, action ) => {
    const updateIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updateIngredients = updateObject(state.ingredients, updateIngredient);
    const updateState = {
        ingredients: updateIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
    }
    return updateObject(updateState);
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient( state, action );
        case actionTypes.SET_INGREDIENTS:
            return updateObject( state, {
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false
            } )
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject( state, { error: true } )
        default: return state;
    }
}

export default reducer;
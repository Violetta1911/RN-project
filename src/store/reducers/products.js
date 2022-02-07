import PRODUCTS from "../../../data/dummy-data";
import { DELETE_PRODUCT } from "../actions/products";
const initialState = {
    avaliableProducts: PRODUCTS,
    userProducts: PRODUCTS
};

export default (state = initialState, action) => {
    switch (action.type){
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(product=>product.id !== action.pid),
                avaliableProducts: state.avaliableProducts.filter(product=>product.id !== action.pid),

            };

    }
    return state;
};
import react from "react";
import { createContext, useReducer } from "react";
import reducer from './Reducer'

const initialState = {
    products: [],
    cart: [],
};

//create Globel context
export const GlobalContext = createContext(initialState);

//create a Provider for Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function recieveProducts(product) {
        dispatch({
            type: 'RECIEVE_PRODUCTS',
            payload: product
        });
    }
    function addCart(product) {
        dispatch({
            type: 'ADD_CART',
            payload: {
                ...product,
                items: 1,
            }
        });
    }
    function cancelCartItem(product) {
            dispatch({
                type: "CANCEL_CART",
                payload: product,
            });
        }
    return (
        <GlobalContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                recieveProducts,
                addCart,
                cancelCartItem,

            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
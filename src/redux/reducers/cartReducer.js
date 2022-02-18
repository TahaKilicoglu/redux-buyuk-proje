import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      // daha önce sepette var mı diye find ile kontrol ettik
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );//parametre ile gönderilen id den farklı olanları yeni bir array yapıp filter ile 
      return newState2; //yukarıda newState olduğundan 2 dedik dikkat
        // filter da aynı map gibi şarta göre yeni bir array oluşturuyor.Bu durumda referans değişmiş oluyor.
    default:
      return state;
  }
}

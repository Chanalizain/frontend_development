import { PRODUCTS } from "./ex3-shopping-card.js";
import { getCartTotalAmount } from "./ex3-shopping-card.js";
import { SHOPPING_CART } from "./ex3-shopping-card.js";
import { addProductToCart } from "./ex3-shopping-card.js";
import { removeProductFromCart } from "./ex3-shopping-card.js";

//test2
addProductToCart(1);
console.log(SHOPPING_CART);
//test3
removeProductFromCart(1);
console.log(JSON.stringify(SHOPPING_CART));
//test1
console.log(getCartTotalAmount());


'strict mode';

console.log('Importing module');
import add, { cart } from './shoppingCard.js';
/* add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something'); */

/* const getLastPost = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return { title: data[0].title, body: data[0].body };
  } catch (err) {
    console.error(err);
  }
};

const lastPost = await getLastPost();
console.log(lastPost); */

/* const ShoppingCart2 = (() => {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };
  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
  const shoppingCost = (quantity) => {
    const cost = quantity * shippingCost;
    console.log(`Shipping cost is ${cost}`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); */

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find((el) => el.quantity >= 2));

import 'core-js/stable';

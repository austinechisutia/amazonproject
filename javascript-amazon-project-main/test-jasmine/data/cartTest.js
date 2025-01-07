
import {addToCart, cart} from '../../script/cart.js';

describe("test suite:addToCart", ()=>{
  it('adds an existing product to the cart', ()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    console.log(localStorage.getItem("cart"));
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toBe(1);
  })
  it('adds a new product to the cart with quantity', ()=>{    
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toBe(2);
  })
})

import { cart } from "../cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import{formatMoney} from "../money.js";

export function renderPaymentSummery(){
  
  let productPriceCents = 0;

  let shippingPriceCents = 0;

  cart.forEach((cartItem)=>{
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    // shipping cost
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);
    shippingPriceCents += deliveryOption.priceCents;

  });

const totalPriceCents = productPriceCents + shippingPriceCents;
console.log(totalPriceCents);

const taxCents = totalPriceCents * 0.1;
const totalPriceWithTaxCents = totalPriceCents + taxCents;
console.log(totalPriceWithTaxCents);

const paymentSummeryHTML = 
`
     <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">${formatMoney(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${formatMoney(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${formatMoney(totalPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${formatMoney(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${formatMoney(totalPriceWithTaxCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
`

document.querySelector(".js-payment-summary").innerHTML = paymentSummeryHTML;
  
}
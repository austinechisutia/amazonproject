
export function formatMoney(cents) {
  return "$" + (cents / 100).toFixed(2);
}

export default formatMoney;
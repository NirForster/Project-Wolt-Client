export default function getNumericPrice(price: string) {
  if (price === "Included") {
    return 0;
  }
  const sign = price[0] === "+" ? 1 : -1;
  return sign * +price.slice(2);
}

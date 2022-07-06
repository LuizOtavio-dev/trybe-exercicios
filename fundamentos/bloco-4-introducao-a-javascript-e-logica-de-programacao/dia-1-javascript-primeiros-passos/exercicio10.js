const costValue = 10;
const saleValue = 20;

const totalCostValue = costValue + (costValue * 20) / 100;
const profit = saleValue - totalCostValue;

let totalProfit;

if (costValue < 0 || saleValue < 0) {
  totalProfit = "Erro!"
} else {
  totalProfit = profit * 1000;
}

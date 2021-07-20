export interface IMoneyBack {
  purchaseAmount: number;
  moneyGiven: number;
  moneyChange: Array<string>;
  valueToCalculate: Array<string>;
  minimumOfNotes: number;
  cashback: number;
}

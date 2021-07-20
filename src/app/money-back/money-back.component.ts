import { IMoneyBack } from './money-back.component.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-back',
  templateUrl: './money-back.component.html',
  styleUrls: ['./money-back.component.css'],
})
export class MoneyBackComponent {
  resultReturn = '';
  onSubmit(getNumber: any) {
    const data: IMoneyBack = {
      purchaseAmount: getNumber.controls.purchaseAmount.value,
      moneyGiven: getNumber.controls.moneyGiven.value,
      moneyChange: ['0', '0'],
      valueToCalculate: [],
      minimumOfNotes: 0,
      cashback: 0,
    };
    if (data.purchaseAmount < 0 || data.moneyGiven < 0) {
      return (this.resultReturn =
        'money given and purchase amount must be bigger than 0');
    } else if (data.moneyGiven < data.purchaseAmount) {
      return (this.resultReturn =
        'money given must be bigger than purchase amount');
    }

    data.valueToCalculate = (data.moneyGiven - data.purchaseAmount)
      .toString()
      .split('');

    if (data.valueToCalculate.length > 2) {
      data.moneyChange[0] = data.valueToCalculate
        .slice(0, data.valueToCalculate.length - 2)
        .join('');
      data.moneyChange[1] =
        data.valueToCalculate[data.valueToCalculate.length - 2];

      data.moneyChange.push(data.valueToCalculate.pop() || '');
    } else if (data.valueToCalculate.length === 2) {
      data.moneyChange[1] =
        data.valueToCalculate[data.valueToCalculate.length - 2];
      data.moneyChange.push(data.valueToCalculate.pop() || '');
    } else {
      data.moneyChange.push(data.valueToCalculate.pop() || '');
    }
    for (let values of data.moneyChange) {
      data.minimumOfNotes += Number(values);
    }
    data.cashback =
      Number(data.moneyChange[0]) * 100 +
      Number(data.moneyChange[1]) * 10 +
      Number(data.moneyChange[2]);
    return (this.resultReturn = `number minimum of notes: ${data.minimumOfNotes}, purchase amount: ${data.purchaseAmount}, cashback ${data.cashback}, notes of hundred: ${data.moneyChange[0]}, notes of ten: ${data.moneyChange[1]}, notes of one: ${data.moneyChange[2]}`);
  }
}

import { IPalindrome } from './palindrome.component.interface';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css'],
})
export class PalindromeComponent {
  returnResult = [{}];
  isEqual = false;
  onSubmit(getNumber: any) {
    this.isEqual = false;
    const data: IPalindrome = {
      value1: getNumber.controls.value1.value,
      value2: getNumber.controls.value2.value,
      reverseString: '',
      swicthValue: '',
      palindrome: [],
    };
    if (data.value1 === data.value2) {
      console.log('here');
      this.isEqual = true;
      return data.palindrome;
    }
    if (data.value1 > data.value2) {
      data.swicthValue = data.value1.toString();
      data.value1 = data.value2;
      data.value2 = Number(data.swicthValue);
    }

    for (data.value1; data.value1 <= data.value2; data.value1 += 1) {
      if (data.value1 > 0) {
        data.reverseString = data.value1
          .toString()
          .split('')
          .reverse()
          .join('');
        if (Number(data.reverseString) == data.value1) {
          data.palindrome.push(Number(data.value1));
        }
      } else {
        data.reverseString = data.value1
          .toString()
          .split('')
          .slice(1)
          .reverse()
          .join('');
        if (Number('-' + data.reverseString) == data.value1) {
          data.palindrome.push(Number(data.value1));
        }
      }
    }
    this.returnResult = data.palindrome;
    return data.palindrome;
  }
}

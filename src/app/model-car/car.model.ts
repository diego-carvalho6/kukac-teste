import { HttpClient } from '@angular/common/http';
import { IVehicle } from './model-car.component.interface';

export class Car implements IVehicle {
  doorAmount = '2 ou 4';
  json = {};
  constructor(
    public model: string,
    public manufacterYear: string,
    public brand: string,
    private http: HttpClient
  ) {
    this.model = model;
    this.manufacterYear = manufacterYear;
    this.brand = brand;
  }
  post() {
    this.json = {
      model: this.model,
      manufacterYear: this.manufacterYear,
      brand: this.brand,
      doorAmount: this.doorAmount,
    };
    this.http
      .post('http://localhost:4300/register-car', this.json)
      .subscribe((res: any) => console.log(res));

    return true;
  }
}

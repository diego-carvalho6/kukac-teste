import { IVehicle } from './model-car.component.interface';
import { HttpClient } from '@angular/common/http';

export class MotorCycle implements IVehicle {
  wheels = 2;
  passagers = '1 ou 2';
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
      wheels: this.wheels,
      passagers: this.passagers,
    };
    this.http
      .post('http://localhost:4300/register-motorcycle', this.json)
      .subscribe((res: any) => console.log(res));

    return true;
  }
}

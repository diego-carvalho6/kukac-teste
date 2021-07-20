import { Car } from './car.model';
import { MotorCycle } from './motorcycle.model';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-model-car',
  templateUrl: './model-car.component.html',
  styleUrls: ['./model-car.component.css'],
})
export class ModelCarComponent {
  car = true;
  vehicleValues = [''];
  model: any;
  brand: any;
  doorAmount: any;
  manufacterYear: any;
  wheels: any;
  passagers: any;
  valueToPost: any;
  created: Boolean;

  constructor(private http: HttpClient) {
    this.created = false;
  }

  changeVehicle() {
    this.car = !this.car;
  }
  onSubmit(vehicle: any) {
    this.created = false;

    this.model = vehicle.controls.model.value;
    this.brand = vehicle.controls.brand.value;
    this.manufacterYear = vehicle.controls.manufacterYear.value;

    if (this.car) {
      console.log('her');
      this.valueToPost = new Car(
        this.model,
        this.manufacterYear,
        this.brand,
        this.http
      );
      this.created = this.valueToPost.post();
    }
    if (!this.car) {
      this.valueToPost = new MotorCycle(
        this.model,
        this.manufacterYear,
        this.brand,
        this.http
      );
      this.created = this.valueToPost.post();
    }
  }
}

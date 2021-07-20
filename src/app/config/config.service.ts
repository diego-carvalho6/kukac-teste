import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable()
export class ConfigService {
  getCep: Array<any>;
  constructor(private http: HttpClient) {
    this.getCep = [];
  }
  getConfig(
    value1: string,
    value2: string,
    value3: string,
    value4: string,
    value5: string
  ) {
    this.getCep = [];
    this.http
      .get(environment.BASE_URL + '/ws/' + value1 + '/json/')
      .toPromise()
      .then((response) => this.getCep.push(response))
      .catch((err) =>
        this.getCep.push({
          message: `adreess not found, try to verify the cep ${value5}`,
        })
      );
    this.http
      .get(environment.BASE_URL + '/ws/' + value2 + '/json/')
      .toPromise()
      .then((response) => this.getCep.push(response))
      .catch((err) =>
        this.getCep.push({
          message: `adreess not found, try to verify the cep ${value2}`,
        })
      );
    this.http
      .get(environment.BASE_URL + '/ws/' + value3 + '/json/')
      .toPromise()
      .then((response) => this.getCep.push(response))
      .catch((err) =>
        this.getCep.push({
          message: `adreess not found, try to verify the cep ${value3}`,
        })
      );
    this.http
      .get(environment.BASE_URL + '/ws/' + value4 + '/json/')
      .toPromise()
      .then((response) => this.getCep.push(response))
      .catch((err) =>
        this.getCep.push({
          message: `adreess not found, try to verify the cep ${value4}`,
        })
      );
    this.http
      .get(environment.BASE_URL + '/ws/' + value5 + '/json/')
      .toPromise()
      .then((response) => this.getCep.push(response))
      .catch((err) =>
        this.getCep.push({
          message: `adreess not found, try to verify the cep ${value5}`,
        })
      );

    return this.getCep;
  }
}

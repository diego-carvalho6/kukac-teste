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
  getConfig(value: Array<string>) {
    this.getCep = [];
    for (let a of value) {
      this.http
        .get(environment.BASE_URL + '/ws/' + a + '/json/')
        .toPromise()
        .then((response) => this.getCep.push(response))
        .catch((err) =>
          this.getCep.push({
            message: `adreess not found, try to verify the cep ${a}`,
          })
        );
    }

    return this.getCep;
  }
}

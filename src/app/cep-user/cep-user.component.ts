import { ConfigService } from './../config/config.service';
import { ICep } from './cep-user.component.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep-user',
  templateUrl: './cep-user.component.html',
  styleUrls: ['./cep-user.component.css'],
})
export class CepUserComponent {
  getCep: Array<any>;
  storeCep = [''];
  constructor(private configService: ConfigService) {
    this.getCep = [];
  }
  onSubmit(ceps: any) {
    const data: ICep = {
      arrayAdreess: [{}],
      cep1: ceps.controls.cep1.value.toString(),
      cep2: ceps.controls.cep2.value.toString(),
      cep3: ceps.controls.cep3.value.toString(),
      cep4: ceps.controls.cep4.value.toString(),
      cep5: ceps.controls.cep5.value.toString(),
    };
    this.storeCep.push(data.cep1, data.cep2, data.cep3, data.cep4, data.cep5);

    this.getCep = this.configService.getConfig(this.storeCep);
    console.log(this.getCep);
  }
}

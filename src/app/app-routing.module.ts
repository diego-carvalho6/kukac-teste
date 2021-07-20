import { HomeComponent } from './home/home.component';
import { MoneyBackComponent } from './money-back/money-back.component';
import { CepUserComponent } from './cep-user/cep-user.component';
import { ModelCarComponent } from './model-car/model-car.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'palindrome', component: PalindromeComponent },
  { path: 'model-car', component: ModelCarComponent },
  { path: 'cep-user', component: CepUserComponent },
  { path: 'money-back', component: MoneyBackComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

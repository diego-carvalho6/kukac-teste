import { ConfigService } from './config/config.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { MoneyBackComponent } from './money-back/money-back.component';
import { ModelCarComponent } from './model-car/model-car.component';
import { CepUserComponent } from './cep-user/cep-user.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,

    PalindromeComponent,
    MoneyBackComponent,
    ModelCarComponent,
    CepUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}

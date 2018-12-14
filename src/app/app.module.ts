import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationInfoComponent } from './application-info/application-info.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationInfoComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ApplicationInfoComponent]
})
export class AppModule { }

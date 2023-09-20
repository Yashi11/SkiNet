import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './shop/shop.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

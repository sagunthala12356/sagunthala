import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SwiperModule } from 'swiper/angular';
import { GestureComponent } from './gesture/gesture.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import {ToastrModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GestureComponent,
    ProfiledetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SwiperModule ,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

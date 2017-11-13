import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

import { WeatherService } from './shared/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    WeatherCardComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WeatherService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

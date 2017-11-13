import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { WeatherService } from "../shared/weather.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  @Output() changeCity: EventEmitter<string> = new EventEmitter<string>();

  constructor(private weatherService: WeatherService) {}

  weatherData: any;
  errorMessage: string;
  defaultCityName: string = "Madrid";
  latitude: string = "0";
  longitude: string = "0";
  cityName: string;

  ngOnInit() {
    this.getLocation();
  }

  private getWeatherByCity(cityName = this.defaultCityName): void {
    this.weatherService.getWeatherByCity(cityName).subscribe(data => {
      this.weatherData = data.list.map(this.formatWeatherData);
      this.cityName = data.city.name;
      this.changeCity.emit(this.cityName);
    }, error => (this.errorMessage = <any>error));
  }
  private getWeatherByLocation(): void {
    if (this.latitude && this.longitude) {
      this.weatherService
        .getWeatherByLocation(this.latitude, this.longitude)
        .subscribe(data => {
          this.weatherData = data.list.map(this.formatWeatherData);
          this.cityName = data.city.name;
          this.changeCity.emit(this.cityName);
        }, error => (this.errorMessage = <any>error));
    } else {
      this.getWeatherByCity();
    }
  }

  private getLocation() {
    let that = this;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        that.saveLocation(position, that);
      },
      function() {
        that.getWeatherByCity();
      }
    );
  }

  private saveLocation(position, that) {
    if (position) {
      that.latitude = position.coords.latitude.toString();
      that.longitude = position.coords.longitude.toString();
    }
    that.getWeatherByLocation();
  }

  private formatWeatherData(weatherItem, index) {
    return {
      id: index,
      date: weatherItem.dt_txt,
      temp: parseInt(weatherItem.main.temp, 16),
      wind: weatherItem.wind.speed,
      humidity: weatherItem.main.humidity,
      desc: weatherItem.weather[0].description,
      main: weatherItem.weather[0].main
    };
  }
}

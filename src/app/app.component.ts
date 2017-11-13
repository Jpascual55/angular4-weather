import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Amazing Weather App";
  cityName: string = "Loading...";
  detail: false;

  changeCity(cityName) {
    this.cityName = cityName;
  }
}

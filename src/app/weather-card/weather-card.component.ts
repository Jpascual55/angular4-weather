import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weather;

  constructor() {}

  ngOnInit() {
    this.weather.hour = new Date(this.weather.date).getHours();
    this.filterDate();
  }

  private filterDate() {
    switch (this.weather.hour) {
      case 12:
        this.weather.moment = 'Morning';
        this.weather.active = true;
        break;
      case 15:
        this.weather.moment = 'Day';
        break;
      case 18:
        this.weather.moment = 'Evening';
        break;
      case 21:
        this.weather.moment = 'Night';
        break;
      default:
        this.weather.moment = 'Unkown moment';
    }
  }
}

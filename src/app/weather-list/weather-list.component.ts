import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  @Input() weatherData;

  constructor() {}

  ngOnInit() {
    this.weatherData = this.weatherData.filter(this.filterOneDayAndSomeHours);
    this.desactiveCards();
  }

  private filterOneDayAndSomeHours(weatherItem) {
    let today = new Date().getDate();
    let tomorrow = today + 1;
    let weatherDate = new Date(weatherItem.date);
    return weatherDate.getDate() === tomorrow && weatherDate.getHours() > 9;
  }

  private activeCard(weather) {
    this.desactiveCards();
    weather.active = true;
  }

  private desactiveCards() {
    this.weatherData = this.weatherData.map(item => {
      item.active = false;
      return item;
    });
  }
}

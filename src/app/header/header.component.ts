import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges {
  @Input() changedCityName: string;

  constructor() {}

  cityName: string = '';

  ngOnChanges(changes: SimpleChanges) {
    this.cityName = changes.changedCityName.currentValue;
  }
}

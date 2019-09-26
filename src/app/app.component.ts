import { Component, Input } from '@angular/core';
import chartOptions from './global-chart-options';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  @Input() title = 'Highcharts Chart ng Element!';
  Highcharts = Highcharts;
  chartOptions = chartOptions;




}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  @Input() number1: any = 0;
  @Input() number2: any = 0;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onCalculation: EventEmitter<number> = new EventEmitter<number>();

  onClick() {
    this.onCalculation.emit(
      Number.parseInt(this.number1) + Number.parseInt(this.number2)
    );
  }
}

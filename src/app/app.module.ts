import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HighchartsChartModule],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ng-highchart-element', customElement);
  }
}

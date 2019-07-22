import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'CustomTooltipApp';
  constructor() {

  }
  @HostListener('click') onClick() {
    console.log('hi clicking');
    const tooltip = document.getElementsByClassName('ng-tooltip-show') && document.getElementsByClassName('ng-tooltip-show')[0];
    tooltip && tooltip.remove();
  }
}

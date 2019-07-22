import { Renderer2, Input } from '@angular/core';
import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[tooltip]',
})
export class TooltipDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input('tooltip') tooltipTitle: string;
  tooltip: HTMLElement;
  offset = 10;

  @HostListener('click') onClick() {
    this.hideExistingToolTip();
    this.show();
  }

  hideExistingToolTip() {
    const tooltip = document.getElementsByClassName('ng-tooltip-show') && document.getElementsByClassName('ng-tooltip-show')[0];
    tooltip && tooltip.remove();
  }

  show() {
    this.create();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }
  create() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle) // textNode
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');

  }

}

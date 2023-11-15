import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'child1',
  template: `
    <p class="text-center">child1 works!</p>
    <div class="text-center">
      <button class="text-center" (click)="changeToParent()">
        Change to Parent
      </button>
    </div>
  `,
  styles: [],
})
export class Child1Component {

  @Output()
  public onChangeChild: EventEmitter<boolean> = new EventEmitter();

  constructor(private ServiceService: ServiceService) {}

  public changeToParent() {
    this.ServiceService.changeServPage();
    this.onChangeChild.emit(this.ServiceService.selectedPage);
  }
}

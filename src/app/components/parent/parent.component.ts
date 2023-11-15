import { Component, EventEmitter, Output } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'parent',
  template: `
    <p class="text-center">parent works!</p>
    <div class="text-center">
      <button class="text-center" (click)="changeToChild()">
        Change to Child1
      </button>
    </div>
  `,
  styles: [],
})
export class ParentComponent {

  @Output()
  public onChangeParent: EventEmitter<boolean> = new EventEmitter();

  constructor( private ServiceService: ServiceService){}

  changeToChild(){
    this.ServiceService.changeServPage();
    this.onChangeParent.emit(this.ServiceService.selectedPage);
  }



}

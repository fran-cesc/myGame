import { GenericService } from './../../services/generic.service';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-obs-form',
  templateUrl: './obs-form.component.html',
  styleUrls: ['./obs-form.component.css']
})
export class ObsFormComponent {
public state: boolean = false;

constructor(private genericService: GenericService){
  this.genericService.changeCheckbox = this.state;
}

changeCheckboxState(){
  this.state = !this.state;
  this.genericService.changeCheckbox = this.state;
}

}

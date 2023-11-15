import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from '../../services/generic.service';

@Component({
  selector: 'app-obs-result',
  templateUrl: './obs-result.component.html',
  styleUrls: ['./obs-result.component.css']
})
export class ObsResultComponent {
public state$!: Observable<boolean>;

constructor(GenericService: GenericService){
  this.state$ = GenericService.checkboxClicked;
}
}

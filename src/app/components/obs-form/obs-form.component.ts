import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-obs-form',
  templateUrl: './obs-form.component.html',
  styleUrls: ['./obs-form.component.css']
})
export class ObsFormComponent {

    public isChecked = new BehaviorSubject<boolean>(false);


}

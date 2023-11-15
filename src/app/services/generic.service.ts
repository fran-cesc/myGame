import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {

  private isClicked: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {}

  get checkboxClicked():Observable<boolean>{
    return this.isClicked.asObservable();
  }

  set changeCheckbox(newValue: boolean){
    this.isClicked.next(newValue);
  }
}

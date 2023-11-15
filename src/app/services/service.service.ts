import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  constructor() {}

  public selectedPage: boolean = true;

  public changeServPage(){
    // if (this.selectedPage == 'parent') {
    //   this.selectedPage = 'child'
    // } else {
    //   this.selectedPage = 'parent'
    // }
    this.selectedPage = !this.selectedPage;
  }


}

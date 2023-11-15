import { Component } from '@angular/core';
import { Child1Component } from '../../components/child1/child1.component';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
})
export class OutputPageComponent {

public selectedHomePage: boolean = true;

constructor( private ServiceService: ServiceService){}

onNewPage(param: boolean): void{
  console.log("from home-page component. param = " + param);
  this.selectedHomePage = param;
}

}

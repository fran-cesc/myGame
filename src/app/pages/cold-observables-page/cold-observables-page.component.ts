import { Component } from '@angular/core';
import { SwService } from '../../services/swService.service';
import { SwapiResponse } from 'src/app/interfaces/starships.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cold-observables-page',
  templateUrl: './cold-observables-page.component.html',
  styleUrls: ['./cold-observables-page.component.css'],
})
export class ColdObservablesPageComponent {
  // public starshipList: Starship[] = [];
  public receivedData$: Observable<SwapiResponse>;

  constructor(private SwService: SwService) {
    // this.SwService.getStarShips().subscribe((result) => {
    //   this.starshipList = result.results;
    // });
    this.receivedData$ = this.SwService.getStarShips();
  }
}

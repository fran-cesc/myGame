import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SwapiResponse } from '../interfaces/starships.interface';


@Injectable({
  providedIn: 'root'
})
export class SwService {
public APIURL = 'https://swapi.py4e.com/api/starships';

  constructor( private http: HttpClient){  }

getStarShips(): Observable<SwapiResponse>{
    return this.http.get<SwapiResponse>(this.APIURL);
  };

}

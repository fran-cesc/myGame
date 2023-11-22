import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private HttpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000';
   }

  register(formValue: any){
    return firstValueFrom(
      // TODO -> CANVIAR EL TIPUS ANY PER UNA INTERFÍCIE
      this.HttpClient.post<any>(`${this.baseUrl}/register`, formValue)
    )
  }

  login(formValue: any){
        // TODO -> Intentar amb observables (subscribe)
    return firstValueFrom(
      // TODO -> CANVIAR EL TIPUS ANY PER UNA INTERFÍCIE
      this.HttpClient.post<any>(`${this.baseUrl}/login`, formValue)
    )
  }

}

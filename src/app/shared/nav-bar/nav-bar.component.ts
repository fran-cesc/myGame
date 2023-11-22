import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    router = inject(Router)

    logOut(){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
}

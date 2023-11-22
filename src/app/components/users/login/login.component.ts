import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formulario: FormGroup;

  usersService = inject(UsersService);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      // TODO VALIDATE
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.usersService.login(this.formulario.value);
    if (!response.error) {
      localStorage.setItem('token', response.accessToken);
      this.router.navigate(['/welcome']);
    }
  }

}

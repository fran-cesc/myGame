import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  formulario: FormGroup;

  usersService = inject(UsersService);

  constructor() {
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  async onSubmit() {
    // TODO -> VALIDACIONS FORMULARI
    const response = await this.usersService.register(this.formulario.value);
    console.log("resposta del register");
    console.log(response);
  }
}

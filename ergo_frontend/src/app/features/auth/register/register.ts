import { Component } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  constructor(private authService: AuthService) {}
}

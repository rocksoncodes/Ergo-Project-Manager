import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-auth-layout",
	imports: [FormsModule, ReactiveFormsModule, RouterOutlet],
	templateUrl: "./auth-layout.html",
	styleUrl: "./auth-layout.scss",
	standalone: true,
})
export class AuthLayout {}

import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "app-layout",
	imports: [FormsModule, ReactiveFormsModule, RouterOutlet, NgOptimizedImage],
	templateUrl: "./auth-layout.html",
	styleUrl: "./auth-layout.scss",
	standalone: true,
})
export class AuthLayout {}

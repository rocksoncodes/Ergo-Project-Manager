import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AuthService } from "../services/auth-service";
import { LoginPayload } from "../models/auth-models";

@Component({
	selector: "app-login",
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: "./auth-login.html",
	styleUrl: "./auth-login.scss",
	standalone: true,
})
export class AuthLogin implements OnInit {
	loginForm!: FormGroup;
	isLoading: boolean = false;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
	) {}

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm(): void {
		this.loginForm = this.fb.group({
			email: ["", Validators.required],
			password: ["", Validators.required],
		});
	}

	get form() {
		return this.loginForm.controls;
	}

	login(): void {
		if (this.loginForm.invalid) {
			return;
		}

		this.loginForm.markAsTouched();
		this.isLoading = true;

		const request: LoginPayload = this.loginForm.value;

		this.authService.loginUser(request).subscribe({
			next: () => {
				this.isLoading = false;
			},
			error: () => {
				this.isLoading = false;
			},
		});
	}
}

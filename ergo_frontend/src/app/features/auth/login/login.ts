import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-login",
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: "./login.html",
	styleUrl: "./login.scss",
	standalone: true,
})
export class Login implements OnInit {
	loginForm!: FormGroup;
	isLoading: boolean = false;

	constructor(private fb: FormBuilder) {}

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

		this.isLoading = true;

		const formValue = this.loginForm.value;

		const request = {
			email: formValue.email,
			password: formValue.password,
		};
	}
}

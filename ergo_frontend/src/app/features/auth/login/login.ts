import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-login",
	imports: [ReactiveFormsModule],
	templateUrl: "./login.html",
	styleUrl: "./login.scss",
})
export class Login implements OnInit {
	loginForm!: FormGroup;
	isLoading: boolean = false;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.initializeFrom();
	}

	initializeFrom(): void {
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

		const formValue = this.loginForm.value;

		const request = {
			email: formValue.email,
			password: formValue.password,
		};

		this.isLoading = true;
	}
}

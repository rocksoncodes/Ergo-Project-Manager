import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-register",
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: "./register.html",
	styleUrl: "./register.scss",
	standalone: true,
})
export class Register implements OnInit {
	registerForm!: FormGroup;
	isLoading: boolean = false;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm(): void {
		this.registerForm = this.fb.group({
			email: ["", Validators.required],
			password: ["", Validators.required],
		});
	}

	get form() {
		return this.registerForm.controls;
	}

	registerUser(): void {
		if (this.registerForm.invalid) {
			return;
		}

		this.isLoading = true;

		const formValue = this.registerForm.value;

		const request = {
			email: formValue.email,
			password: formValue.password,
		};
	}
}

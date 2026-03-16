import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink, Router } from "@angular/router";
import { AuthService } from "../../services/auth-service";
import { ToastrService } from "ngx-toastr";
import { RegisterPayload } from "../../models/auth-models";

@Component({
	selector: "app-register",
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: "./auth-register.html",
	styleUrl: "./auth-register.scss",
	standalone: true,
})
export class AuthRegister implements OnInit {
	registerForm!: FormGroup;
	isLoading: boolean = false;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private toastr: ToastrService,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm(): void {
		this.registerForm = this.fb.group({
			firstname: ["", Validators.required],
			lastname: ["", Validators.required],
			email: ["", Validators.required],
			password: ["", Validators.required],
		});
	}

	navigateToHomePage(): void {
		this.router.navigate(["/home"]).then((success) => {
			if (!success) {
				this.toastr.error("System failure please try again later");
			}
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
		this.registerForm.markAsTouched();

		// const request: RegisterPayload = this.registerForm.value;

		// this.authService.registerUser(request).subscribe({
		// 	next: () => {
		// 		this.isLoading = false;
		// 		this.toastr.success("Account created successfully.");
		// 		this.navigateToDashboard();
		// 	},
		// 	error: (error: any) => {
		// 		this.isLoading = false;
		// 		this.toastr.error(error.message);
		// 	},
		// });
		this.navigateToHomePage();
	}
}

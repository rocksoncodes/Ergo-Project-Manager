import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AuthService } from "../auth-service";
import { ToastrService } from "ngx-toastr";

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

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private toastr: ToastrService,
		private cd: ChangeDetectorRef,
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

	get form() {
		return this.registerForm.controls;
	}

	registerUser(): void {
		if (this.registerForm.invalid) {
			return;
		}

		this.isLoading = true;
		this.registerForm.markAsTouched();

		const formValue = this.registerForm.value;
		const request = {
			firstname: formValue.firstname,
			lastname: formValue.lastname,
			email: formValue.email,
			password: formValue.password,
		};

		this.authService.registerUser(request).subscribe({
			next: () => {
				this.isLoading = false;
				this.toastr.success("Account created successfully.");
				this.cd.markForCheck();
			},
			error: (error: any) => {
				this.isLoading = false;
				this.toastr.error(error.message);
				this.cd.markForCheck();
			},
		});
	}
}

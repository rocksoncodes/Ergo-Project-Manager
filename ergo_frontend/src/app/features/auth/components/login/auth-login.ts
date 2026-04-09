import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth-service";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";

@Component({
	selector: "app-login",
	imports: [ReactiveFormsModule, RouterLink],
	templateUrl: "./auth-login.html",
	styleUrl: "./auth-login.scss",
	standalone: true,
})
export class AuthLogin implements OnInit, OnDestroy {
	loginForm!: FormGroup;
	isLoading: boolean = false;
	private destroy$: Subject<void> = new Subject<void>();

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private toastr: ToastrService,
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

	navigateToDashboard(): void {
		this.router.navigate(["/layout"]).then((response) => {
			this.isLoading = false;
			this.toastr.success("Welcome Back!");
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

		// const request: LoginPayload = this.loginForm.value;
		//
		// this.authService.loginUser(request)
		// .pipe(takeUntil(this.destroy$))
		// .subscribe({
		// 	next: () => {
		// 		this.isLoading = false;
		//    this.navigateToHomePage()
		// 	},
		// 	error: () => {
		// 		this.isLoading = false;
		// 	},
		// });
		this.navigateToDashboard();
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}

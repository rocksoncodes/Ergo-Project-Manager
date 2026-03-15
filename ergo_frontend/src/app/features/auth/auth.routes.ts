import { Routes } from "@angular/router";
import { AuthLogin } from "./login/auth-login";
import { AuthRegister } from "./register/auth-register";
import { AuthLayout } from "./layout/auth-layout";

export const AUTH_ROUTES: Routes = [
	{
		path: "",
		component: AuthLayout,
		children: [
			{ path: "login", component: AuthLogin },
			{ path: "register", component: AuthRegister },
			{ path: "", redirectTo: "login", pathMatch: "full" },
		],
	},
];

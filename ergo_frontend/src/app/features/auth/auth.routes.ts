import { Routes } from "@angular/router";
import { AuthLogin } from "./components/login/auth-login";
import { AuthRegister } from "./components/register/auth-register";
import { AuthLayout } from "./components/layout/auth-layout";

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

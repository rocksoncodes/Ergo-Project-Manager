import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { AuthLayout } from "./auth-layout/auth-layout";

export const AUTH_ROUTES: Routes = [
	{
		path: "",
		component: AuthLayout,
		children: [
			{ path: "login", component: Login },
			{ path: "register", component: Register },
			{ path: "", redirectTo: "login", pathMatch: "full" },
		],
	},
];

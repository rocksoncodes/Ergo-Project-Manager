import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "auth/login",
		pathMatch: "full",
	},
	{
		path: "auth",
		loadChildren: () => import("./features/auth/auth.routes").then((route) => route.AUTH_ROUTES),
	},
	{
		path: "home",
		loadChildren: () => import("./features/home/home.routes").then((route) => route.HOME_ROUTES),
	},
	{
		path: "**",
		redirectTo: "auth/login",
		pathMatch: "full",
	},
];

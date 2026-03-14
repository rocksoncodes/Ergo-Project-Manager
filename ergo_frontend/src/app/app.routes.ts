import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "auth/register",
		pathMatch: "full",
	},
	{
		path: "auth",
		loadChildren: () => import("./features/auth/auth.routes").then((route) => route.AUTH_ROUTES),
	},
	{
		path: "**",
		redirectTo: "auth/register",
		pathMatch: "full",
	},
];

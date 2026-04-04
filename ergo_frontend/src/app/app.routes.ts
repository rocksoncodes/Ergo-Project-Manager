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
		path: "",
		loadChildren: () => import("./features/layout/layout.routes").then((route) => route.LAYOUT_ROUTES),
	},
	{
		path: "**",
		redirectTo: "auth/login",
		pathMatch: "full",
	},
];

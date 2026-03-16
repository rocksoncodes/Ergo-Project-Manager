import { Routes } from "@angular/router";
import { HomeLayout } from "./components/home-layout/home-layout";

export const HOME_ROUTES: Routes = [
	{
		path: "",
		component: HomeLayout,
		children: [
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full",
			},
			{
				path: "dashboard",
				loadComponent: () => import("./components/dashboard/dashboard").then((child) => child.Dashboard),
			},
			{
				path: "**",
				redirectTo: "dashboard",
				pathMatch: "full",
			},
		],
	},
];

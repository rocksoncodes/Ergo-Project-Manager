import { Routes } from "@angular/router";
import { Layout } from "./components/layout/layout";

export const HOME_ROUTES: Routes = [
	{
		path: "",
		component: Layout,
		children: [
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full",
			},
			{
				path: "dashboard",
				loadComponent: () =>
					import("../dashboard/components/dashboard-main/dashboard").then((child) => child.Dashboard),
			},
			{
				path: "projects",
				loadComponent: () => import("../projects/components/projects").then((child) => child.Projects),
			},
			{
				path: "members",
				loadComponent: () => import("../members/components/members").then((child) => child.Members),
			},
			{
				path: "tasks",
				loadComponent: () => import("../tasks/components/tasks").then((child) => child.Tasks),
			},
			{
				path: "settings",
				loadComponent: () => import("../settings/components/settings").then((child) => child.Settings),
			},
			{
				path: "**",
				redirectTo: "dashboard",
				pathMatch: "full",
			},
		],
	},
];

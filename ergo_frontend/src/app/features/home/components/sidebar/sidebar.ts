import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavItems } from "./sidebar-models/sidebar.models";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
	selector: "app-sidebar",
	imports: [CommonModule, RouterLink, RouterLinkActive],
	templateUrl: "./sidebar.html",
	styleUrl: "./sidebar.scss",
	standalone: true,
})
export class Sidebar {
	navOverviewItems: NavItems[] = [
		{
			icon: "bi-house-door-fill",
			label: "Dashboard",
			route: "/dashboard",
		},
	];

	navGeneralItems: NavItems[] = [
		{
			icon: "bi-folder-fill",
			label: "Projects",
			route: "/projects",
		},
		{
			icon: "bi-people-fill",
			label: "Members",
			route: "/members",
		},
		{
			icon: "bi-list-task",
			label: "Tasks",
			route: "/tasks",
		},
	];

	navManagementItems: NavItems[] = [
		{
			icon: "bi-gear-wide-connected",
			label: "Settings",
			route: "/settings",
		},
	];

	isCollapsed = false;
}

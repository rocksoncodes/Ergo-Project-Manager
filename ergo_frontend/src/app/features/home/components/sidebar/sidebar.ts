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
			route: "/home/dashboard",
		},
	];

	navGeneralItems: NavItems[] = [
		{
			icon: "bi-folder-fill",
			label: "Projects",
			route: "/home/projects",
		},
		{
			icon: "bi-people-fill",
			label: "Members",
			route: "/home/members",
		},
		{
			icon: "bi-list-task",
			label: "Tasks",
			route: "/home/tasks",
		},
	];

	navManagementItems: NavItems[] = [
		{
			icon: "bi-gear-wide-connected",
			label: "Settings",
			route: "/home/settings",
		},
	];

	isCollapsed = false;

	toggleCollapse() {
		this.isCollapsed = !this.isCollapsed;
	}
}

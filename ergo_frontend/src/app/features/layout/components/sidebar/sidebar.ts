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
			route: "/layout/dashboard",
		},
	];

	navGeneralItems: NavItems[] = [
		{
			icon: "bi-folder-fill",
			label: "Projects",
			route: "/layout/projects",
		},
		{
			icon: "bi-people-fill",
			label: "Members",
			route: "/layout/members",
		},
		{
			icon: "bi-list-task",
			label: "Tasks",
			route: "/layout/tasks",
		},
	];

	navManagementItems: NavItems[] = [
		{
			icon: "bi-gear-wide-connected",
			label: "Settings",
			route: "/layout/settings",
		},
	];

	isCollapsed = false;

	toggleCollapse() {
		this.isCollapsed = !this.isCollapsed;
	}
}

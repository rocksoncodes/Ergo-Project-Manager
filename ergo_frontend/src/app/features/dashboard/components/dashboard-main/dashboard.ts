import { Component } from "@angular/core";
import { DashboardHeader } from "../dashboard-header/dashboard-header";
import { DashboardSummaries } from "../dashboard-summaries/dashboard-summaries";
import { DashboardTaskList } from "../dashboard-task-list/dashboard-task-list";
import { DashboardChart } from "../dashboard-chart/dashboard-chart";

@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [DashboardHeader, DashboardSummaries, DashboardTaskList, DashboardChart],
	templateUrl: "./dashboard.html",
	styleUrl: "./dashboard.scss",
})
export class Dashboard {}

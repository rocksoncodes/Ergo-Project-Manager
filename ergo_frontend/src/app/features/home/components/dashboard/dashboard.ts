import { Component } from "@angular/core";
import { BaseChartDirective } from "ng2-charts";
import { ChartData, ChartOptions, ChartType } from "chart.js";

@Component({
	selector: "app-dashboard",
	standalone: true,
	imports: [BaseChartDirective],
	templateUrl: "./dashboard.html",
	styleUrl: "./dashboard.scss",
})
export class Dashboard {
	chartType: ChartType = "line";

	chartData: ChartData = {
		labels: ["Mon", "Tue", "Wed", "Thur", "Fri"],
		datasets: [
			{
				label: "Tasks Completed",
				tension: 0.4,
				fill: true,
				data: [10, 40, 20, 50, 30],
				borderColor: "#4e73df",
				backgroundColor: "rgba(78, 115, 223, 0.1)",
			},
		],
	};

	chartOptions: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
	};
}

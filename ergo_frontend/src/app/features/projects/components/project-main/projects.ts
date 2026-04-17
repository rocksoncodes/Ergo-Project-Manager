import { Component } from "@angular/core";
import { ProjectHeader } from "../project-header/project-header";

@Component({
	selector: "app-projects",
	imports: [ProjectHeader],
	templateUrl: "./projects.html",
	styleUrl: "./projects.scss",
})
export class Projects {}

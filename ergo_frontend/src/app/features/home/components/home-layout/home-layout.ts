import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";

@Component({
	selector: "app-home-layout",
	imports: [RouterOutlet, Sidebar, Header],
	templateUrl: "./home-layout.html",
	styleUrl: "./home-layout.scss",
	standalone: true,
})
export class HomeLayout {}

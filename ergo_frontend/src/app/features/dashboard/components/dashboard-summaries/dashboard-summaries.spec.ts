import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardSummaries } from "./dashboard-summaries";

describe("DashboardSummaries", () => {
	let component: DashboardSummaries;
	let fixture: ComponentFixture<DashboardSummaries>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardSummaries],
		}).compileComponents();

		fixture = TestBed.createComponent(DashboardSummaries);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

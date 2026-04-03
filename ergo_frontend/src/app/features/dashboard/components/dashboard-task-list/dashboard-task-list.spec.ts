import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardTaskList } from "./dashboard-task-list";

describe("DashboardTaskList", () => {
	let component: DashboardTaskList;
	let fixture: ComponentFixture<DashboardTaskList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardTaskList],
		}).compileComponents();

		fixture = TestBed.createComponent(DashboardTaskList);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

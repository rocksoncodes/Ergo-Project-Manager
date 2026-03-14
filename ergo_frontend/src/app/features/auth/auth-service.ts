import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	baseUrl: string = "http://127.0.0.1:5000/users";
	constructor(private readonly httpClient: HttpClient) {}

	registerUser(payload: any): Observable<any> {
		return this.httpClient.post<any>(`${this.baseUrl}/create-user-account`, payload);
	}
}

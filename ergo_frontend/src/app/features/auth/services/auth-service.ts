import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthResponse, LoginPayload, RegisterPayload } from "../models/auth-models";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	baseUrl: string = "http://127.0.0.1:5000/users";
	constructor(private readonly httpClient: HttpClient) {}

	registerUser(payload: RegisterPayload): Observable<AuthResponse> {
		return this.httpClient.post<any>(`${this.baseUrl}/register`, payload);
	}

	loginUser(payload: LoginPayload): Observable<AuthResponse> {
		return this.httpClient.post<any>(`${this.baseUrl}/login`, payload);
	}
}

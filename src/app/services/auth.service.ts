// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { UserRegistration } from '../models/user-registraion.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/auth'; // API URL for authentication
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    // Get current user from local storage or set to null
    const user = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(
      user ? JSON.parse(user) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  registerUser(user: UserRegistration): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, user);
  }

  // Get current user value
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // Login method
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login/`, { username, password })
      .pipe(
        map((response) => {
          // Store user details and JWT in local storage
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
          return response;
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  // Logout method
  logout(): void {
    // Remove user data and JWT from local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']); // Navigate to login page
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }
  isowner(): boolean {
    return this.currentUserValue.role == 'owner';
  }
  isclient(): boolean {
    return this.currentUserValue.role == 'client';
  }
}

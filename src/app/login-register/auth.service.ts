import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserData } from './interfaces/register-login.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IUserData[]> {
    return this.http.get<IUserData[]>(`${this.baseUrl}`);
  }

  register(user: IUserData): Observable<IUserData> {
    return this.http.post<IUserData>(this.baseUrl, user);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  fetchGitUserDetails(userName: string): Observable<any> {
    return this.http.get(this.baseUrl + userName);
  }

  fetchRepos(userName: string) {
    return this.http.get(this.baseUrl + userName + '/repos');
  }
}

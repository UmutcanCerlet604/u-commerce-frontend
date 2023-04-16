import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Login, User} from 'src/app/model/model';
import {Router} from '@angular/router';

type JwtToken = {
    id_token: string;
};

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private router: Router, private http: HttpClient) {
  }

    logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('usertoken');
    }

  login(credentials: Login): Observable<User> {
      const headers: HttpHeaders = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get<User>(environment.SERVER_API_URL + '/login', {headers});
    }

  setUserLoggedIn(user: User, password: string) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('usertoken', 'Basic ' + btoa(user.username + ':' + password));
    }

    getCurrentUser() {
        if (localStorage.getItem('user')) {
            const user: User = JSON.parse(localStorage.getItem('user')!);
            return user;
        } else {
            return null;
        }
    }


    getLoggedIn(): boolean {
        if (this.getCurrentUser()) {
            return true;
        } else {
            return false;
        }
    }

}

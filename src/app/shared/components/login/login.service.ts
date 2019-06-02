import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginUser, User} from "../../models/user";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {

    }

    registerUser(user: User): Observable<any> {
        return this.http.post(`/tourism/api/v1/register`, user);
    }

    loginUser(loginUser: LoginUser): Observable<any> {
        return this.http.post(`/tourism/api/v1/login`, loginUser);
    }

}

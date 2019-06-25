import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeedBack} from "../models/feedBack";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FeedBackService {

    constructor(private http: HttpClient) {
    }

    submitFeedBack(feedBack: FeedBack): Observable<any> {
        return this.http.post(`/tourism/api/v1/feedback`, feedBack);
    }

    getAllFeedbacks(): Observable<any> {
        return this.http.get(`/tourism/api/v1/feedback`);
    }
}

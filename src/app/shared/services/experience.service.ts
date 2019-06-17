import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Experience} from "../models/experience";

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient) {
    }

    addExperience(type: string, experience: Experience): Observable<any> {
        return this.http.post(`/tourism/api/v1/${type}`, experience);
    }

    getExperiences(type: string): Observable<any> {
        return this.http.get(`/tourism/api/v1/${type}`);
    }

    deleteExperience(type: string, cruiseId: string): Observable<any> {
        return this.http.delete(`/tourism/api/v1/${type}/${cruiseId}`);
    }

}

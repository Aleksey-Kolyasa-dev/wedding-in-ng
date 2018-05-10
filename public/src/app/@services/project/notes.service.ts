import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NotesService {
    constructor(public http: HttpClient) {

    }

    public getNotes(link: string): Observable<any> {
        return this.http.get(`notes/:id/${link}`);
    }
}
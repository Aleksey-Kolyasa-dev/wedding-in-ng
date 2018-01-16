import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import {PROJECT_BASE_URL} from '../../@constants/api.constants';
import {Project} from '../../@interfaces/project';



@Injectable()
export class ProjectService {

    constructor(private http: HttpClient ) {
    }

    public createNewProject(project: Project): Observable<any> {
        return this.http.post(`${PROJECT_BASE_URL}/`, project);
    }

    public getUserProjects(): Observable<any> {
        return this.http.get(`${PROJECT_BASE_URL}/`);
    }

    public getSingleProject(id: string): Observable<any> {
        return this.http.get(`${PROJECT_BASE_URL}/${id}`);
    }

    public removeSingleProject(id: string): Observable<any> {
        return this.http.delete(`${PROJECT_BASE_URL}/${id}`);
    }
}

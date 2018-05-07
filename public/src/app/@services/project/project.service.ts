import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PROJECT_BASE_URL} from '../../@constants/api.constant';
import {Project} from '../../@interfaces/project';

let currentProjectId: string;

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

    public getProject(id: string): Observable<any> {
        return this.http.get(`${PROJECT_BASE_URL}/${id}`);
    }

    public updateProject(id: string, project: Project): Observable<any> {
        return this.http.put(`${PROJECT_BASE_URL}/${id}`, project);
    }

    public removeProject(id: string): Observable<any> {
        return this.http.delete(`${PROJECT_BASE_URL}/${id}`);
    }

    public getCurrentProjectId(): string | null {
        return currentProjectId
        ? currentProjectId
        : null;
    }

    public setCurrentProjectId(value: string){
        currentProjectId = value;
    }
}

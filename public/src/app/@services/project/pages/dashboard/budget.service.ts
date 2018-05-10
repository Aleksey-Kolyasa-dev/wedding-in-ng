import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CURRENCY_BASE_URL} from '../../../../@constants/api.constant';
import {ProjectService} from '../../project.service';
import {Currency} from '../../../../@interfaces/project';

@Injectable()
export class BudgetService {
    constructor(private http: HttpClient,
                private projectService: ProjectService) {}

    public getCurrency(): Observable<any> {
        return this.http.get(`${CURRENCY_BASE_URL}/${this.projectService.getCurrentProjectId()}/`);
    }

    public setCurrency(data: Currency): Observable<any> {
        return this.http.put(`${CURRENCY_BASE_URL}/${this.projectService.getCurrentProjectId()}/`, data);
    }
}

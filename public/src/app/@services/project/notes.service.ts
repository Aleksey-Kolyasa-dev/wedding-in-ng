import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Note, NoteLink} from '../../@interfaces/project';
import {ProjectService} from './project.service';
import {NOTES_BASE_URL} from '../../@constants/api.constant';

@Injectable()
export class NotesService {
    constructor(public http: HttpClient,
                private projectService: ProjectService) {
    }

    public getNotes(notesLink: NoteLink): Observable<any> {
        return this.http.get(
            `${NOTES_BASE_URL}/${this.projectService.getCurrentProjectId()}/${notesLink.category}/${notesLink.subCategory}/`
        );
    }

    public postNote(note: Note): Observable<any> {
        return this.http.post(`${NOTES_BASE_URL}/${this.projectService.getCurrentProjectId()}/`, note);
    }

    public deleteNote(noteId: string): Observable<any> {
        return this.http.delete(`${NOTES_BASE_URL}/${this.projectService.getCurrentProjectId()}/${noteId}`);
    }
}

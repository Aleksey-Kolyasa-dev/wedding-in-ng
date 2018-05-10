import {Component, OnInit, Input} from '@angular/core';
import {Note, NoteLink} from "../../../@interfaces/project";
import {NotesService} from "../../../@services/project/notes.service";

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    @Input() notesLink: NoteLink;
    notesList: Note[];
    notesActive = false;
    selected: string;

    constructor(private noteService: NotesService) {
    }

    ngOnInit() {
        this.getNotes();
    }

    getNotes() {
        if (this.notesLink) {
            this.noteService.getNotes(this.notesLink).subscribe(
                notes => {
                    this.notesList = notes;
                    console.log(notes);
                }
            )
        } else {
            this.notesList = [];
        }
    }

    notesToggle() {
        this.notesActive = !this.notesActive;
    }

    removeTriggerActivated(id) {
        this.selected = id;
    }

    removeTriggerCancelled() {
        this.selected = '';
    }

}

import {Component, OnInit, Input} from '@angular/core';
import {Note, NoteLink} from "../../../@interfaces/project";
import {NotesService} from "../../../@services/project/notes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    @Input() notesLink: NoteLink;
    notesForm: FormGroup;
    notesList: Note[];
    notesActive = false;
    selected: string;

    constructor(private noteService: NotesService,
                private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
        this.getNotes();
    }

    createForm() {
        this.notesForm = this.fb.group(
            {
                text: [
                    '',
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
            }
        );
    }

    onSubmit({value}) {
        const note = {
            category: this.notesLink.category,
            subCategory: this.notesLink.subCategory || this.notesLink.category,
            label: this.notesLink.label,
            text: value.text,
        };

        this.noteService.postNote(note).subscribe(
            success => {
                this.getNotes();
                this.createForm();
            }
        )
    }

    getNotes() {
        if (this.notesLink) {
            this.noteService.getNotes(this.notesLink).subscribe(
                notes => {
                    this.notesList = notes;
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

    removeConfirmed(id) {
        this.noteService.deleteNote(id).subscribe(
            success => {
                console.log(success);
                this.getNotes();
            }
        );
    }

    removeTriggerCancelled() {
        this.selected = '';
    }

}

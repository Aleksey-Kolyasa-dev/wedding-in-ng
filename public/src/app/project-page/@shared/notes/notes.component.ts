import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    notesActive = false;

    constructor() {
    }

    ngOnInit() {
    }

    notesToggle() {
        this.notesActive = !this.notesActive;
    }

}

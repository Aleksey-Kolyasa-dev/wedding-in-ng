import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    @Input() notesLink;
    notesActive = false;

    constructor() {
    }

    ngOnInit() {
    }

    notesToggle() {
        this.notesActive = !this.notesActive;
    }

}

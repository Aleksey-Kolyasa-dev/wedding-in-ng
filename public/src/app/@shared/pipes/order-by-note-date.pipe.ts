import {Pipe, PipeTransform} from '@angular/core';
import {Note} from '../../@interfaces/project';

@Pipe({
    name: 'orderByNoteDate'
})
export class OrderByNoteDatePipe implements PipeTransform {
    transform(notes: Note[], args?: string): Note[] {
        if (Array.isArray(notes)) {
            notes.sort((a: any, b: any) => {
                if (a.created > b.created) {
                    return -1;
                } else if (a.created < b.created) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return notes;
        }
    }
}

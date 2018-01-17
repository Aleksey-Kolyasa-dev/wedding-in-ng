// import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class EventsService {
    // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    eventListener$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(data: any) {
        this.emitChangeSource.next(data);
    }
}

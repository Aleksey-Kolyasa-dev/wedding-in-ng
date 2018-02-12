import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../@interfaces/user';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
    @Input() _user: User;

    constructor() {
    }

    ngOnInit() {
    }


}

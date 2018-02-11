import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-start-header',
  templateUrl: './start-header.component.html',
  styleUrls: ['./start-header.component.scss']
})
export class StartHeaderComponent implements OnInit {
  @Input() user: object;
  constructor() { }

  ngOnInit() {
  }

}

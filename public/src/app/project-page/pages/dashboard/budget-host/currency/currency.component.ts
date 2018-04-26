import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CurrencyModalComponent} from './currency-modal/currency-modal.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  setCurrency() {
      this.modalService
          .open(CurrencyModalComponent, {
              size: 'lg',
              container: 'app-fade-in-animation',
          })
          .result.then((data) => {
          alert('OK');
      })
          .catch((error) => {
              alert('ERR');
          });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})

export class WidgetComponent implements OnInit {
  number: string;
  validator = /^(?:\(?\+?48)?(?:[-\.\(\)\s\+\48]*(\d)){9}\)?$/;
  exampleText = 'Fokus Web App';
  validNumber: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.validator = /^(?:\(?\+?48)?(?:[-\.\(\)\s\+\48]*(\d)){9}\)?$/;
  }

  call() {
    if (this.isValidNumber()) {
      this.validNumber = this.number.replace(/\D+/g, '');
      this.validNumber = this.validNumber.substr(this.validNumber.length - 9);
      console.log(this.validNumber);
      this.router.navigate(['/ringing/' + this.validNumber]);
    } else {
      // tslint:disable-next-line:no-console
      console.info('Numer niepoprawny');
    }
  }

  isValidNumber() {
    return this.validator.test(this.number);
  }
}

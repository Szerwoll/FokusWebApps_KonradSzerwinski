import { Component, OnInit } from '@angular/core';
import { CallService } from './../call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  interval: any;

  constructor(private router: Router, private callService: CallService) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.router.navigate(['/']);
      clearInterval(this.interval);

    }, 3000);
  }

}

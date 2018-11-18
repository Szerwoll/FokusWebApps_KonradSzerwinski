import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CallService } from '../call.service';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent implements OnInit {

  interval: any;

  counter: number;

  constructor(private router: Router, private route: ActivatedRoute, private callService: CallService) { }

  ngOnInit() {
    let number = null;

    this.route.params.subscribe(params => { number = params.number; });

    this.counter = 30;

    this.interval = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        this.router.navigate(['/ringing/' + number]);
        clearInterval(this.interval);
      }
    }, 1000);

  }

}

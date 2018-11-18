import { Component, OnInit } from '@angular/core';
import { CallService } from './../call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.css']
})
export class BusyComponent implements OnInit {

  interval: any;

  constructor(private router: Router, private callService: CallService) { }

  ngOnInit() {
    this.interval = setInterval(() => {

      this.callService.checkStatus();
        if (this.callService.isConnected()) {

        this.router.navigate(['/call']);
        clearInterval(this.interval);
      }

    }, 100);
  }

}

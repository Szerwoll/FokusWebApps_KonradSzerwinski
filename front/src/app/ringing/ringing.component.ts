import { Component, OnInit } from '@angular/core';
import { CallService } from './../call.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticSymbol } from '@angular/compiler';

@Component({
  selector: 'app-ringing',
  templateUrl: './ringing.component.html',
  styleUrls: ['./ringing.component.css']
})
export class RingingComponent implements OnInit {

  interval: any;

  constructor(private router: Router, private route: ActivatedRoute, private callService: CallService) { }

  ngOnInit() {
    let number = null;
    let statusRingingAchived = false;

    this.route.params.subscribe(params => { number = params.number; });
    this.callService.placeCall(number);

    this.interval = setInterval(() => {
      this.callService.checkStatus();

    if (this.callService.isRinging()) {
        statusRingingAchived = true;
    }
    // console.log(statusRingingAchived);

    if (this.callService.isFailed() && statusRingingAchived) {
      this.router.navigate(['/failed/' + number]);
      clearInterval(this.interval);
    }
    if (this.callService.isConnected() && statusRingingAchived) {
        this.router.navigate(['/call']);
        clearInterval(this.interval);
      }
    }, 100);
  }
}

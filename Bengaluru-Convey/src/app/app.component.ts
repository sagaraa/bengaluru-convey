import { Component } from '@angular/core';
// import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';
import { OktaAuthService } from './OktaAuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Bangalore-Convey';
  isAuthenticated: boolean;
  constructor(public oktaAuth: OktaAuthService,
     public router: Router){
    console.log("is ", this.isAuthenticated);
   
  }

  ngOnInit() {
    this.isAuthenticated = !this.oktaAuth.isAuthenticated();
  }
}

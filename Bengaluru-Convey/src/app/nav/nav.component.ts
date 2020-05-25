import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '../OktaAuthService';
// import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  dropdownShow = false;
  isAuthenticated: boolean;
  username:string;
  constructor(
    private oktaService: OktaAuthService
    ) { }
  toggleShow() {
    this.dropdownShow = !this.dropdownShow;

  }
  async ngOnInit() {
    this.isAuthenticated = await this.oktaService.isAuthenticated();
    this.username = this.oktaService.idTokenAsUser.username;
  }

  logout(){
    this.oktaService.logout();
  }
}

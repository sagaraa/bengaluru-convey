import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';

// import { OktaAuthService } from '@okta/okta-angular';
import * as OktaSignIn from '@okta/okta-signin-widget';
import { OktaAuthService } from '../OktaAuthService';

@Component({
  selector: 'app-secure',
  // templateUrl:'./login.component.html'
  template: `
    <!-- Container to inject the Sign-In Widget -->
    <div id="okta-signin-container"></div>
  `
})
export class LoginComponent {
  // signIn;
  // widget = new OktaSignIn({
  //   baseUrl: 'https://dev-222278.okta.com',
  //   authParams: {
  //     pkce: true
  //   }
  // });

  constructor(private oktaService: OktaAuthService,
    // oktaAuth: OktaAuthService,
     private router: Router) {
    // this.signIn = oktaAuth;

    // Show the widget when prompted, otherwise remove it from the DOM.
  //   router.events.forEach(event => {
  //     if (event instanceof NavigationStart) {
  //       switch(event.url) {
  //         case '/login':
  //           break;
  //         case '/protected':
  //           break;
  //         default:
  //           this.widget.remove();
  //           break;
  //       }
  //     }
  //   });
  }

  ngOnInit() {
    if (this.oktaService.isAuthenticated()) {
      this.router.navigate(['/home']);
    } else {
      this.oktaService.showLogin();
    }

    // user authentication listener
    this.oktaService.user$.subscribe(user => {
      this.router.navigate(['/home']);
    });
  }

  // ngOnInit() {
  //   this.widget.renderEl({
  //     el: '#okta-signin-container'},
  //     (res) => {
  //       if (res.status === 'SUCCESS') {
  //         this.signIn.loginRedirect('/', { sessionToken: res.session.token });
  //         // Hide the widget
  //         this.widget.hide();
  //       }
  //     },
  //     (err) => {
  //       throw err;
  //     }
  //   );
  // }
}

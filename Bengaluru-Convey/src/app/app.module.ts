import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule, NgbModal, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsermanagementComponent } from './admin/usermanagement/usermanagement.component';
import { UserComponent } from './admin/user/user.component';

// import {
//   OktaAuthModule,
//   OktaAuthService,
//   OktaCallbackComponent
// } from '@okta/okta-angular';
import { UserServiceService } from './service/user-service.service';
import { DashboardService } from './service/dashboard.service';
import { OktaAuthGuard } from './OktaAuthGuard';
import { OktaAuthService } from './OktaAuthService';
import { OktaAuthInterceptor } from './OktaAuthInterceptor';
import { ComplainDialogComponent } from './complain-dialog/complain-dialog.component';

// const config = {
//   issuer: 'https://dev-222278.okta.com/oauth2/default',
//   redirectUri: 'http://localhost:4200/home',
//   clientId: '0oa1uo74mpBXLkOMl357',
//   pkce: true
// }

export function onAuthRequired({ oktaAuth, router }) {
  // Redirect the user to your custom login page
  router.navigate(['/']);
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TransactionsComponent,
    ProfileComponent,
    HistoryComponent,
    HelpComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UsermanagementComponent,
    UserComponent,
    ComplainDialogComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    NgbModule,
    // OktaAuthModule.initAuth(config),
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
        
      },
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [OktaAuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: ['OktaAuthGuard']
      },
      {
        path: 'transaction',
        component: TransactionsComponent,
        // canActivate: ['OktaAuthGuard']
      },
      {
        path: 'history',
        component: HistoryComponent,
        // canActivate: ['OktaAuthGuard']
      },
      {
        path: 'help',
        component: HelpComponent,
        // canActivate: ['OktaAuthGuard']
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: ['OktaAuthGuard']
      },
      {
        path: 'usermanagement',
        component: UsermanagementComponent,
        // canActivate: ['OktaAuthGuard']
      }
    ])
  ],
  providers: [UserServiceService, DashboardService, OktaAuthService, OktaAuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: OktaAuthInterceptor,
    multi: true
  }],
  exports: [NgbModule],
  entryComponents: [ComplainDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

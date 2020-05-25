import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import * as Chart from 'chart.js';
import { UserServiceService } from '../service/user-service.service';
import { OktaAuthService } from '../OktaAuthService';
// import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customerData:any;
  liveTrip:any;
  previousTrips:any;
  stops = ["MG Road",
    "Embassy Golf Link",
    "JP Nagar",
    "Indiranagar",
    "Marathalli",
    "Bagamane Tech",
    "C V Raman Nagar",
    "Baiyappanahalli",
    "Trinity",
    "Domlur",
    "Koramangla",
    "Bellandur",
    "Ulsoor",
    "Church Street",
    "Jayanagar",
    "Yeshwantpur"]

  // = {
  //   username : 'sagararora',
  //   firstname : 'sagar',
  //   lastname : 'arora',
  //   cardNo : '00180',
  //   isActive: true,
  //   createdAt: '2019-09-09',
  //   contactNo: '8126762787',
  //   netBalance: 23,
  //   passType: 'Student'
  // };

  username : string ;
  constructor(private userService: UserServiceService, private oktaService: OktaAuthService) { }
  ngOnInit() {
    this.username = this.oktaService.idTokenAsUser.username;
    this.getUserDetails(this.username);
    this.getActiveTrip(this.username);
    this.getpreviousTrips(this.username);
  }

  getActiveTrip(username:string){
    this.userService.getActiveTrip(username).subscribe(
      data =>{
              this.liveTrip = data;
              },
      error => console.log(error)
    );
  }
  getUserDetails(username:string){
    this.userService.getUserDetails(username).subscribe(
      data => {
        this.customerData = data;
      },
      error => {
        console.log(console.error(error));
      }
    );
  }
  getpreviousTrips(username:string){
    this.userService.getpreviousTrips(username).subscribe(
      data => {
        console.log(data);

        this.previousTrips = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  recharge(amount:string) {
    this.userService.recharge(amount,this.username);
  }
  possibleRoutes:any;
  bestRoute:any;
  searchRoute(start: string, end: string){
    this.userService.searchRoute(start,end).subscribe(
      data => {
        this.possibleRoutes = data;
      },
      error => console.log(error)
      );
    this.userService.bestRoute(start,end).subscribe(
      data => {
        this.bestRoute = data;
      }
    );
  }
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //     }
  //   }
  // };
  // public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

  //  // events
  //  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }



}

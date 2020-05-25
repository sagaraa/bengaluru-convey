import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';


import * as Chart from 'chart.js';
import { DashboardService } from 'src/app/service/dashboard.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public colors: Color[] = [
    { backgroundColor: '#6E7E00' },
  ];

  public barChartData: ChartDataSets[]= [
    { data: [65, 59, 80, 81, 56, 55, 40, 5] },
  ];




  public barChartOptions1: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels1: Label[] = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
  public barChartType1: ChartType = 'bar';
  public barChartLegend1 = true;
  public colors1: Color[] = [
    { backgroundColor: '#6E7E00' },
    { backgroundColor: '#E26800' },
  ];

  public barChartData1: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 5], label: 'Loss' },
    { data: [15, 19, 20, 55, 70, 90, 20, 10], label: 'Profit' },
  ];



  public barChartOptions2: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels2: Label[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
  public barChartType2: ChartType = 'bar';
  public barChartLegend2 = false;
  public colors2: Color[] = [
    { backgroundColor: '#6E7E00' },
  ];
  public barChartData2: ChartDataSets[] = [
    { data: [90, 80, 60, 41, 28, 15] },
  ];

  defaulters:any;
  constructor(private dashboardService: DashboardService, private httpClient: HttpClient) { }
  getDefaulters(){
    this.dashboardService.getDefaulters().subscribe(
      data => {
        this.defaulters = data;
        console.log(data);

      },
      error => {
        console.log(error);

      }
    )
  }
  getBarchartData(days: string){
    this.dashboardService.getBarchartData(days).subscribe(
      data => {
        // this.barChartData = data.count;
        // this.barChartLabels = data.date;

        console.log(data);



      }
    )
  }
  ngOnInit() {
    this.getDefaulters();
    this.getBarchartData('7');
  }

}

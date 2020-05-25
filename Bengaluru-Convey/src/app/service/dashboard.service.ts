import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  getDefaulters(){
    return this.httpClient.get("/api/user/defaulters");
  }
  getBarchartData(days: string){
     var data = {
      days: '7',
      destination: '',
      source: ''
    }
    return this.httpClient.post("/api/freq",data);
  }
}

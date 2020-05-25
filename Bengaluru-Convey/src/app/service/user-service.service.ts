import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUserDetails(username:string) {
    return this.httpClient.get('/api/user/'+username);
  }

  getActiveTrip(username:string) {
    return this.httpClient.get("/api/user/getactivetrip/" +username);
  }
  getpreviousTrips(username:string) {
    return this.httpClient.get("/api/user/history/"+username);
  }
  searchRoute(start:string, end:string) {
    return this.httpClient.get("/api/route/" + start +"/"+end);
  }
  bestRoute(start:string, end:String){
    return this.httpClient.get("/api/routeneo4j/" + start +"/"+end);
  }
  recharge(username: string, amount:string){
    var data = {

    }
    this.httpClient.put("/api/"+username+"/"+amount,data);
  }
}

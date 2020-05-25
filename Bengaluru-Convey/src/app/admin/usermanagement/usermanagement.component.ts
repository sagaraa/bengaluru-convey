import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  username: string;
  searchedUser:any;
  ngOnInit() {
  }
  submitForm(username:string){
    this.httpClient.get("/api/user/"+username).subscribe(
      data => {
        this.searchedUser = data;
        console.log(data);
      }
    );
  }

}

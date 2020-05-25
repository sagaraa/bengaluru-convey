import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  customerData = {
    username : 'sagararora',
    firstname : 'sagar',
    lastname : 'arora',
    cardNo : '00180',
    isActive: true,
    createdAt: '2019-09-09',
    contactNo: '8126762787',
    netBalance: 23,
    passType: 'Student'
  };

  ngOnInit() {
  }

}

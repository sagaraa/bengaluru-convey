import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComplainDialogComponent } from '../complain-dialog/complain-dialog.component';
import { async } from '@angular/core/testing';
import { OktaAuthService } from '../OktaAuthService';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  @ViewChild('myDiv',{static: false}) myDivElementRef: ElementRef;
  value: string;
  constructor(private httpClient:HttpClient, private oktaAuth: OktaAuthService) { }
  username:string;
  ngOnInit() {
    this.username = this.oktaAuth.idTokenAsUser.username;
  }
  hideDialog:boolean = false;
  sorryDialog:boolean = false;
  complaint = {
    "action": "string",
    "active": true,
    "comment": "string",
    "createdAt": "2019-11-27T07:28:59.412Z",
    "custId": "a1",
    "txnId": "string"
  }
  sendComplaint(){

    console.log("skmksm");
    let params = new HttpParams().set("userName",this.username)
    this.httpClient.get("/api/complaint",{params: params}).subscribe( 
      data => {console.log(data);
        
        this.hideDialog = !this.hideDialog;
      },
      error => {console.log(error);
        this.sorryDialog = !this.sorryDialog;
      }
      
    )
  }
  openDialog() {
    this.hideDialog = !this.hideDialog;
  }
  
  sorryDialogOpen() {
    this.sorryDialog = ! this.sorryDialog;
  }
}

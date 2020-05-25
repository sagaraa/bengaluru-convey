import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-complain-dialog',
  templateUrl: './complain-dialog.component.html',
  styleUrls: ['./complain-dialog.component.css']
})
export class ComplainDialogComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close();
  }

}

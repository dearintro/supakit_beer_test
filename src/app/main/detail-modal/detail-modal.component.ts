import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {
  item
  constructor(private _bsModalRef: BsModalRef,) { }

  ngOnInit(): void {
  }

  public onCancel(): void {
    this._bsModalRef.hide();
  }
}

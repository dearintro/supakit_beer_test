import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailModalComponent } from './detail-modal/detail-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  data;
  public modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  p: number = 1;
    
  async loadData() {
    await this.httpClient
      .get('https://api.punkapi.com/v2/beers')
      .subscribe((result) => {
        this.data = result;
      });
  }

  openModal(item) {
    const initialState = {
      item: item,
    };
    this.modalRef = this.modalService.show(
      DetailModalComponent,
      Object.assign(
        {},
        {
          ignoreBackdropClick: true,
          keyboard: false,
          backdrop: true,
          class: 'modal-md',
          initialState,
        }
      )
    );
    // this.modalRef.content.onReturnData.subscribe((result) => {
    // });
  }
}

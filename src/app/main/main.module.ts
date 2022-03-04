import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { DetailModalComponent } from './detail-modal/detail-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    HttpClientModule,
    MainRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule
  ],
  declarations: [MainComponent, DetailModalComponent],
  exports: [],
  entryComponents: [DetailModalComponent],
})
export class MainModule {}

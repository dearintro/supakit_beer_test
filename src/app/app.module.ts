import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [NgxPaginationModule,BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [BsModalService, BsModalRef],
  bootstrap: [AppComponent],
})
export class AppModule {}

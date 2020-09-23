import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import {  DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { TestComponent } from './test/test.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [											
    AppComponent,
      SidebarComponent,
      FooterComponent,
      NavComponent,
      LoginComponent,
      HomeComponent,
      TestComponent,
      BirthdayComponent,
      AnnouncementsComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    DxDataGridModule,
    DxTemplateModule
  
  ],
  providers: [AuthService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

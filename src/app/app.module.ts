import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CreateUserComponent } from './create-user/create-user.component';

import { Routes, RouterModule } from '@angular/router';
import { BlockDeblockComponent } from './block-deblock/block-deblock.component';
import { PaidNotPaidComponent } from './paid-not-paid/paid-not-paid.component';
import { User } from "app/create-user/user.model";
import { LoginService } from "app/home/login.service";
import { Http, HttpModule } from "@angular/http";
import { CreateUserService } from "app/create-user/create-user.service";
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-user',
    component: CreateUserComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'block-deblock',
    component: BlockDeblockComponent
  },
  {
    path: 'paid-not-paid',
    component: PaidNotPaidComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    CreateUserComponent,
    BlockDeblockComponent,
    PaidNotPaidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [User, LoginService, CreateUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

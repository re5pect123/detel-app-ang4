import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { LoginService } from "app/home/login.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LOGOMID = 'assets/images/DETEL_logo_znak.png'

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {   

  }


  sendRequestAuthentication() {
    console.log('sendRequest')
    this.loginService.testRequest();
  }

  login(form: NgForm) {
    console.log(form.value.userName)
  }

}

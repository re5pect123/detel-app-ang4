import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";

@Component({
  selector: 'app-paid-not-paid',
  templateUrl: './paid-not-paid.component.html',
  styleUrls: ['./paid-not-paid.component.css']
})
export class PaidNotPaidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notPaid(form: NgForm) {

  }
  paid(form: NgForm) {

  }
}

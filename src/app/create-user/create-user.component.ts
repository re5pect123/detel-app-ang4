import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms/forms";
import { User } from "app/create-user/user.model";
import { CreateUserService } from "app/create-user/create-user.service";


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(public user: User, private createUserService: CreateUserService) {

  }
  createUserRequest() {
    console.log('Create User')
    this.createUserService.createUser();
      console.log('Create User Finish')
  }

  ngOnInit() {
  }

  createUser(form: NgForm) {
    console.log(this.user.name)
    console.log(this.user.address)
    console.log(this.user.countryCode)
    console.log(this.user.cityCode)
    console.log(this.user.phoneNumber)
    console.log(this.user.location)
    console.log(this.user.activationDate)
    console.log(this.user.deviceId)
    console.log(this.user.deviceIdType)
    console.log(this.user.packet)
    console.log(this.user.customerId)
    console.log(this.user.peerId)

    this.user.name = form.value.name;
    this.user.address = form.value.address;
    this.user.countryCode = form.value.countryCode;
    this.user.cityCode = form.value.cityCode;
    this.user.phoneNumber = form.value.phoneNumber;
    this.user.location = form.value.location;
    this.user.activationDate = form.value.activationDate;
    this.user.deviceId = form.value.deviceId;
    this.user.deviceIdType = form.value.deviceIdType;
    this.user.packet = form.value.packet;
    this.user.customerId = form.value.customerId;
    this.user.peerId = form.value.peerId;
  }
  clearAll() {
    this.user.name = '';
    this.user.address = '';
    this.user.countryCode = null;
    this.user.cityCode = null;
  }

}

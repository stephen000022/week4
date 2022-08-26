import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  userbase = [{email: "1@mail.com", password: "123"}, {email: "2@mail.com", password: "234"}, {email: "3@mail.com", password: "345"}];

  itemClicked(){
    let i = this.userbase.findIndex(e=>e.email == this.email && e.password == this.password)
    if (i == -1) {
      alert("Error")
      
    } else {
      this.router.navigateByUrl('/account');
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

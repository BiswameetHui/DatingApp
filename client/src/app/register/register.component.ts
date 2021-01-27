import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  // @Input() usersFromHomeComponent: any; //Parent-to-Child communication
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountservice: AccountService) { }

  ngOnInit(): void {
    // console.log(this.usersFromHomeComponent);
  }

  register() {
    // console.log(this.model);
    this.accountservice.register(this.model).subscribe(response => {
      // console.log(response); //return from accountservice.Register()
      this.cancel();
    },
    error => {
      console.log(error);
    }) 
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/model';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  userAddForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.email],
      phoneNumber: ["", Validators.required]
    });
  }

  addUser(user: User) {
    this.userService.addUser(user).subscribe(res => {
      console.log(res)
    })
  }


}

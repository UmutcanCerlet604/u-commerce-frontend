import { Component, OnInit } from '@angular/core';
import { Login,User } from '../model/model';
import {Router} from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../services/auth/authentication.service'
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  public login!: Login;

  public username: string = "";
  public password: string = "";

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    this.authenticationService.logout();
  }


  doLogin() {

    this.authenticationService
        .login(new Login(this.username, this.password, true))
      .subscribe(res => {
        const user: User = res as User;
        console.log(user);

        this.authenticationService.setUserLoggedIn(user, this.password)
        user.userRole.userRole == "ROLE_ADMIN" ? this.router.navigate(['/adminhome']):this.router.navigate(['/home'])

        }, err => {
            this.messageService.add({
                key: 'tst',
                severity: 'error',
                summary: 'Giriş hatalı !',
                detail: 'Kullanıcı veya Şifre hatalı olabilir !'
            });
        });
    }
}

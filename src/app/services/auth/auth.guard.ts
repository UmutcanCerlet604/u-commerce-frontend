import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) {

    }

    canActivate(): boolean {
        if (this.authenticationService.getLoggedIn() === true) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

}

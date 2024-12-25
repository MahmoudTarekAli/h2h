import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  environment = environment;
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //to be implemented
    return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import {ProductsService} from '../_service/products.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChildauthGuard implements CanActivateChild {

  constructor(private ProService:ProductsService , private router:Router){

  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const isLoggedIn = this.ProService.isLoggedIn();

    if(isLoggedIn){

      return true;

    }else{
      // this.router.navigate(['/login']);
      // return false
      alert('You are not allowed to view this page');
            return false;
    }
  }


}

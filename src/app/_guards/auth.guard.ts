import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ProductsService} from '../_service/products.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ProService:ProductsService , private router:Router){

  }

 token = this.ProService.isLogedin();

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isLoggedIn = this.ProService.isLoggedIn();
    if(isLoggedIn){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false
    }


  }

}

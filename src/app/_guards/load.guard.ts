import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import {ProductsService} from '../_service/products.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {

constructor(private ProductsService:ProductsService , private route:Router){}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const isLoggedIn = this.ProductsService.isLoggedIn();

      if(isLoggedIn){
        return true;
      }
      else{
        this.route.navigate(['/login']);
        return false
      }
  }
}

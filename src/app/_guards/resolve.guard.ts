import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import {ProductsService} from '../_service/products.service';
@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {

  constructor(private ProductsService:ProductsService ){}
  resolve() {
    return this.ProductsService.getUser();
  }

}

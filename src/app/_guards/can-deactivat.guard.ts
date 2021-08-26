import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MysettingsComponent } from '../dashboard/mysettings/mysettings.component';

export interface canComponentLeave{
    canLeave: () => boolean
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivatGuard implements CanDeactivate<canComponentLeave> {


  canDeactivate(component: canComponentLeave){

    if(component.canLeave){
      return component.canLeave()
    }
    return false

  }


}

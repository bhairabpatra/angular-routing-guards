import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PriceComponent } from './components/price/price.component';
import { IndexComponent } from './dashboard/index/index.component';
import { MyprofileComponent } from './dashboard/myprofile/myprofile.component';
import { MysettingsComponent } from './dashboard/mysettings/mysettings.component';
import { MywalletsComponent } from './dashboard/mywallets/mywallets.component';
import { WishlistComponent } from './dashboard/wishlist/wishlist.component';
import { AuthGuard } from './_guards/auth.guard';
import { CanDeactivatGuard } from './_guards/can-deactivat.guard';
import { ChildauthGuard } from './_guards/childauth.guard';
import { LoadGuard } from './_guards/load.guard';
import { ResolveGuard } from './_guards/resolve.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'price', component: PriceComponent , canActivate:[AuthGuard]},
  {
    path: 'blogs',
           canLoad:[LoadGuard],
          loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
  },
  { path: 'contact', component: ContactComponent },
  {
        path: 'index',
        component: IndexComponent,
        canActivate:[AuthGuard],

        children: [

          { path: 'myprofile', component: MyprofileComponent ,  canActivateChild:[ChildauthGuard] ,
          canDeactivate:[CanDeactivatGuard]},
          { path: 'settings', component: MysettingsComponent},
          { path: 'mywallet', component: MywalletsComponent ,resolve:{data:ResolveGuard}},
          { path: 'wishlist', component: WishlistComponent}

        ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

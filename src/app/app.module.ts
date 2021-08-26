import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './dashboard/index/index.component';
import { MywalletsComponent } from './dashboard/mywallets/mywallets.component';
import { CertificateComponent } from './dashboard/certificate/certificate.component';
import { WishlistComponent } from './dashboard/wishlist/wishlist.component';
import { MyprofileComponent } from './dashboard/myprofile/myprofile.component';
import { MysettingsComponent } from './dashboard/mysettings/mysettings.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PriceComponent } from './components/price/price.component';
import { FilterPipe } from './_pipes/filter.pipe';
import { HoverDirective } from './deractive/hover.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { CanDeactivatGuard } from './_guards/can-deactivat.guard';
import { AuthGuard } from './_guards/auth.guard';
import { ResolveGuard } from './_guards/resolve.guard';
import { LoadGuard } from './_guards/load.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    MywalletsComponent,
    CertificateComponent,
    WishlistComponent,
    MyprofileComponent,
    MysettingsComponent,
    LoginComponent,
    HomeComponent,
    ContactComponent,
    PriceComponent,
    FilterPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CanDeactivatGuard,AuthGuard,ResolveGuard,LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

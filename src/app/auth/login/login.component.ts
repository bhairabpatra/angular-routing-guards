import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../_service/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private productservice:ProductsService , private router:Router) { }

  ngOnInit(): void {
  }

  login(email:any , password:any){


        if(this.productservice.login(email , password )){
          this.router.navigate(['index'])
        }
  }

}

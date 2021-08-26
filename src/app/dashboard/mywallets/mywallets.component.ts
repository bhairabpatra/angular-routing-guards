import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from '../../_service/products.service';

@Component({
  selector: 'app-mywallets',
  templateUrl: './mywallets.component.html',
  styleUrls: ['./mywallets.component.scss']
})

export class MywalletsComponent implements OnInit {

  allUser:any =[];
  constructor(private productService:ProductsService , private activaRoute:ActivatedRoute) { }

  ngOnInit(): void {

        // this.productService.getUser().subscribe((res) => {
        //     this.allUser = res;
        //     console.log("" + JSON.stringify(this.allUser))
        // })

        this.allUser = this.activaRoute.snapshot.data['data'];

        console.log("haiii " + this.allUser)
  }


}

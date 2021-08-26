import { Component, OnInit } from '@angular/core';
import {canComponentLeave} from '../../_guards/can-deactivat.guard';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

 userName:FormControl = new FormControl()

  canLeave(): boolean {
        if(this.userName.dirty){
          return window.confirm('please save before leave')
        }
        return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

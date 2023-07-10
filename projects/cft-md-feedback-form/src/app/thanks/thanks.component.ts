import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cft-mdew-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {

  constructor(router: Router){
    setTimeout(()=>{
      router.navigate(["/form"]);
    },2000);
  }

}

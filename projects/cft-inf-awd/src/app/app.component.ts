import { Component } from '@angular/core';
import { VideoSignalService } from './video-signal.service';
import { ConfigService } from './config.service';
import { awardModel } from './awardModel';
import { Router } from '@angular/router';

@Component({
  selector: 'cft-prj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  celebreties: awardModel = {
    label: "celebreties",
    data:[
      {name:"Account Management", videoPath:"/assets/video/account_management.mp4"},
  ]
  }
  // testinominals: awardModel = {
  //   label: "testinominals",
  //   data:["asdasd","asdada"]
  // }

  // winnerCategories: awardModel = {
  //   label: "winnerCategories",
  //   data:["asdasd","asdada"]
  // }

  listObject ={
    "celebreties": this.celebreties,
    // "testinominals": this.testinominals,
    // "winnerCategories": this.winnerCategories
  }


  constructor(private vs: VideoSignalService , private config : ConfigService, public router: Router ) {

  }
getMe(value:any) {
  this.config.data.set(this.listObject[value]);
  this.router.navigate(['/list']);
}



  title = 'cft-inf-awd';
}

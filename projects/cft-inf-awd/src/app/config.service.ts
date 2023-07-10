import { Injectable, signal } from '@angular/core';
import { awardModel } from './awardModel';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // testinominal: awardModel = {
  //   label: "testinominal",
  //   data:["asdasd","asdada"]
  // }
  celebreties: awardModel = {
    label: "celebreties",
    data:[
      {name:"Account Management", videoPath:"/assets/video/account_management.mp4"},
  ]
  }
  data= signal<awardModel>(this.celebreties);

  constructor() {



   }
}

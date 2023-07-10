import { Component, OnInit, Signal, effect } from '@angular/core';
import { VideoSignalService } from '../video-signal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cft-prj-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{

  video: string ="hello";
  constructor(public vs:VideoSignalService) {
    // this.vs.getMessageStream().subscribe(data=>{
    //   console.log(data + "Helli");
    //   this.video=data;
    // })
     // this.video= VideoSignalService.videoSubject();
  }

  ngOnInit(): void {
    this.vs.data$.subscribe(data => {
      this.video = data;
    });
  };

}

import { Injectable, Signal, signal } from '@angular/core';
import { Observable, Subject, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoSignalService {

  // private channelName = 'cft-channel';
  // private videoSubject: Subject<string> = new Subject<string>();
  // data$: Observable<string> = this.videoSubject.asObservable();

  // constructor() {

  //   // this.socket = new WebSocket('ws://localhost:3001');

  //   // this.socket.addEventListener('message', this.handleMessage.bind(this));
  //   // this.channel = new BroadcastChannel();

  //   // this.channel.onmessage = this.handleMessage.bind(this);
  //   window.addEventListener('message', this.handleMessage.bind(this));
  // }

  // sendData(data:string){
  //   localStorage.setItem('tabData', data);
  //  //  window.postMessage({channel: this.channelName , data}, '*');
  // }

  // private handleMessage(event: StorageEvent)
  // {
  //    //const data = event.data;
  //   // this.
  //   // console.log(event.data);
  //   // const {channel , data} = event.data;
  //   // if(channel=== this.channelName){
  //   //   VideoSignalService.videoSubject.set(data);
  //   //   console.log(VideoSignalService.videoSubject() + "changing");
  //   // }
  //   // const data = event.data;
  //   // this.videoSubject.next(data);
  //   if (event.key === 'tabData') {
  //     this.videoSubject.next(event.newValue);
  //   }
  // }

  // getMessageStream() {
  //    //console.log(VideoSignalService.videoSubject);
  //    //return this.videoSubject.asObservable();
  // }

  private dataSubject: Subject<string> = new Subject<string>();
  data$: Observable<string> = this.dataSubject.asObservable();
  count=0;

  constructor() {

    // Listen for changes in localStorage
    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  sendData(data: string) {
    this.count++;
    // Store the data in localStorage
    console.log(data+this.count.toString());
    localStorage.setItem('tabData', data+this.count.toString());
    localStorage.setItem('tabDataUpdated', 'true');
   //  console.log(data);
  }

  private handleStorageChange(event: StorageEvent) {
    console.log("Hello");
    console.log(event.newValue);
    const newData = localStorage.getItem('tabData');
    if (event.key === 'tabData') {
      this.dataSubject.next(event.newValue?? 'empty');
    }
  }
}

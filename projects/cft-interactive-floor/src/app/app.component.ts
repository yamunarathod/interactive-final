import { Component, OnInit,ElementRef } from '@angular/core';
import {ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';

interface Video {
  title: string;
  src: string;
}

@Component({
    selector: 'cft-iw-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
 })
export class AppComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer:any ;
  defaultVideo: string;
  defaultVideoPlaying: boolean;
  videoList: Video[];
  currentIndex: number;
  data: any;

  constructor(private socket: Socket) {
    // Set the default video source
    this.defaultVideo = './assets/v1.mp4';

    // Define your array of videos with their titles and paths
    this.videoList = [
      { title: ' 2', src: './assets/v2.mp4' },
      { title: ' 3', src: './assets/v3.mp4' },
      { title: ' 4', src: './assets/v4.mp4' },
      { title: ' 1', src: './assets/v5.mp4' },
    


      // Add more videos as needed
    ];

    // Set the initial index to -1 (default video)
    this.currentIndex = -1;

    // Set the default video playing flag to true
    this.defaultVideoPlaying = true;
  }

  ngAfterViewInit() {
    // Autoplay the default video
    this.videoPlayer.nativeElement.load();
    this.videoPlayer.nativeElement.play();
  }
  ngOnInit() {
    // Connect to the Socket.IO server
    // Adjust the URL to match your Socket.IO server

    // Listen for 'serialData' event from the Socket.IO server
    this.socket.on('videoNumber', (data: any) => {
      console.log('Received data from serial port:', data);
      // Process the received serial data

      // Example: If data is "1", play the first video in the video list
      if (data == 1) {
        this.playSelectedVideo(this.videoList[0].src);
        this.videoPlayer.nativeElement.load();
        this.videoPlayer.nativeElement.play();
      } if (data == 2) {
        this.playSelectedVideo(this.videoList[1].src);
        this.videoPlayer.nativeElement.load();
        this.videoPlayer.nativeElement.play();
      }
      if (data == 3) {
        this.playSelectedVideo(this.videoList[2].src);
        this.videoPlayer.nativeElement.load();
        this.videoPlayer.nativeElement.play();
      }
      if (data ==4) {
        this.playSelectedVideo(this.videoList[3].src);
        this.videoPlayer.nativeElement.load();
        this.videoPlayer.nativeElement.play();
      }
      if (data == 5) {
        this.playSelectedVideo(this.videoList[4].src);
        this.videoPlayer.nativeElement.load();
        this.videoPlayer.nativeElement.play();
      }
     
      
      
      // this.socket.emit('data', this.data);
    });
    
  }


  playSelectedVideo(videoSrc: string) {
    // Pause the current video
    this.videoPlayer.nativeElement.pause();

    // Set the new video source
    this.videoPlayer.nativeElement.src = videoSrc;

    // Play the new video
    this.videoPlayer.nativeElement.load();
    this.videoPlayer.nativeElement.play();

    // Set the default video playing flag to false
    this.defaultVideoPlaying = false;
    // setTimeout(() => {
    //   this.videoPlayer.nativeElement.load();
    //   this.videoPlayer.nativeElement.play();
    //   this.videoPlayer.nativeElement.classList.add('video-visible');
    // }, 500);
  }

  playNextVideo() {
    console.log('video ended');
    
    // Pause the current video
    // this.videoPlayer.nativeElement.pause();

    // Check if the default video should play next
    // if (this.defaultVideoPlaying) {
      // Set the default video as the source
      this.videoPlayer.nativeElement.src = ''
      this.videoPlayer.nativeElement.src = this.defaultVideo;

      // Set the default video playing flag to true
      this.defaultVideoPlaying = true;
      // setTimeout(() => {
      //   this.videoPlayer.nativeElement.load();
      //   this.videoPlayer.nativeElement.play();
      //   this.videoPlayer.nativeElement.classList.add('video-visible');
      // }, 500);


    // } else {
      // Calculate the index of the next video
      // this.currentIndex = (this.currentIndex + 1) % this.videoList.length;

      // // Set the source of the next video
      // this.videoPlayer.nativeElement.src = this.videoList[this.currentIndex].src;
    // }

    // Play the next video or the default video
    // this.videoPlayer.nativeElement.load();
    // this.videoPlayer.nativeElement.play();
  }

  getVideoSource() {
    if (this.defaultVideoPlaying) {
      return this.defaultVideo;
    } else {
      return this.videoList[this.currentIndex]?.src || '';
    }
  }
}
















































// import { Component, ViewChild } from '@angular/core';

// interface Video {
//   title: string;
//   src: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   @ViewChild('videoPlayer') videoPlayer: any;
//   defaultVideo: string;
//   defaultVideoPlaying: boolean;
//   videoList: Video[];

//   constructor() {
//     // Set the default video source
//     this.defaultVideo = './assets/v1.mp4';

//     // Define your array of videos with their titles and paths
//     this.videoList = [
//       { title: 'Video 1', src: './assets/v2.mp4' },
//       { title: 'Video 2', src: './assets/v3.mp4' },
//       { title: 'Video 3', src: './assets/v4.mp4' },
//       // Add more videos as needed
//     ];

//     // Autoplay the default video
//     this.videoPlayer.nativeElement.load();
//     this.videoPlayer.nativeElement.play();

//     // Set the default video playing flag to true
//     this.defaultVideoPlaying = true;
//   }

//   playSelectedVideo(videoSrc: string) {
//     // Pause the current video
//     this.videoPlayer.nativeElement.pause();

//     // Set the new video source
//     this.videoPlayer.nativeElement.src = videoSrc;

//     // Play the new video
//     this.videoPlayer.nativeElement.load();
//     this.videoPlayer.nativeElement.play();

//     // Set the default video playing flag to false
//     this.defaultVideoPlaying = false;
//   }

//   playNextVideo() {
//     // Pause the current video
//     this.videoPlayer.nativeElement.pause();

//     // Check if the default video should play next
//     if (this.defaultVideoPlaying) {
//       // Set the default video as the source
//       this.videoPlayer.nativeElement.src = this.defaultVideo;

//       // Set the default video playing flag to true
//       this.defaultVideoPlaying = true;
//     } else {
//       // Calculate the index of the next video
//       const currentIndex = this.videoList.findIndex(video => video.src === this.videoPlayer.nativeElement.src);
//       const nextIndex = (currentIndex + 1) % this.videoList.length;

//       // Set the source of the next video
//       this.videoPlayer.nativeElement.src = this.videoList[nextIndex].src;
//     }

//     // Play the next video or the default video
//     this.videoPlayer.nativeElement.load();
//     this.videoPlayer.nativeElement.play();
//   }
// }








































// import { Component } from '@angular/core';
// import {ViewChild } from '@angular/core';

// @Component({
//   selector: 'cft-iw-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'cft-interactive-floor';
//   @ViewChild('videoPlayer') videoPlayer: any;
//   videoSource: string;
//   defaultVideo: string;
//   nextVideo: string;

//   constructor() {
   
//     this.defaultVideo = "./assets/v2.mp4";
//     this.videoSource = this.defaultVideo ;

//     // Set the next video source
//     this.nextVideo = "./assets/v4.mp4";
//   }

//   playNextVideo() {
//     // Pause the current video
//     this.videoPlayer.nativeElement.pause();

//     // Check if the current video is the default video
//     if (this.videoSource === this.defaultVideo) {
//       this.videoSource = this.nextVideo; // Set the next video as the source
//     } else {
//       this.videoSource = this.defaultVideo; // Set the default video as the source
//     }

//     // Play the new video
//     this.videoPlayer.nativeElement.load();
//     this.videoPlayer.nativeElement.play();
//   }
// }







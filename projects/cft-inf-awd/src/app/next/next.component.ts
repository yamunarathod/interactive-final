import { Component } from '@angular/core';
import { VideoSignalService } from '../video-signal.service';

@Component({
    selector: 'cft-prj-next',
    templateUrl: './next.component.html',
    styleUrls: ['./next.component.css'],
})
export class NextComponent {
    clickMe() {
        this.vs.sendData("Ramayan");
    }
    constructor(private vs: VideoSignalService) {}
}

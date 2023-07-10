import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'cft-prj-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public config: ConfigService) {

  }

}

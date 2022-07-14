import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qabar',
  templateUrl: './qabar.page.html',
  styleUrls: ['./qabar.page.scss'],
})
export class QabarPage implements OnInit {

  qabar = [
    {
      'image': '../assets/qabar/1.png'
    },
    {
      'image': '../assets/qabar/2.png'
    },
  
  ]


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wuzu',
  templateUrl: './wuzu.page.html',
  styleUrls: ['./wuzu.page.scss'],
})
export class WuzuPage implements OnInit {


  wuzu = [
    {
      'image': '../assets/wuzu/1.png'
    },
    {
      'image': '../assets/wuzu/2.png'
    },
    {
      'image': '../assets/wuzu/3.png'
    },
    {
      'image': '../assets/wuzu/4.png'
    },
    {
      'image': '../assets/wuzu/5.png'
    },
    {
      'image': '../assets/wuzu/6.png'
    },
  
  ]
  constructor() { }

  ngOnInit() {
  }

}

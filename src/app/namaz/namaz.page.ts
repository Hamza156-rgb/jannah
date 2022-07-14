import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namaz',
  templateUrl: './namaz.page.html',
  styleUrls: ['./namaz.page.scss'],
})
export class NamazPage implements OnInit {

  namaz = [
    {
      'image': '../assets/namaz/1.png'
    },
    {
      'image': '../assets/namaz/2.png'
    },
    {
      'image': '../assets/namaz/3.png'
    },
    {
      'image': '../assets/namaz/4.png'
    },
    {
      'image': '../assets/namaz/5.png'
    },
    {
      'image': '../assets/namaz/6.png'
    },
    {
      'image': '../assets/namaz/7.png'
    },
    {
      'image': '../assets/namaz/8.png'
    },
    {
      'image': '../assets/namaz/9.png'
    },
    {
      'image': '../assets/namaz/10.png'
    },
    {
      'image': '../assets/namaz/11.png'
    },
    {
      'image': '../assets/namaz/12.png'
    },
    {
      'image': '../assets/namaz/13.png'
    },
    {
      'image': '../assets/namaz/14.png'
    },
    {
      'image': '../assets/namaz/15.png'
    },
    {
      'image': '../assets/namaz/16.png'
    },
  ]



  constructor() { }

  ngOnInit() {
  }

}

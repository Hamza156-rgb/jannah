import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sickness',
  templateUrl: './sickness.page.html',
  styleUrls: ['./sickness.page.scss'],
})
export class SicknessPage implements OnInit {


  sickness = [
    {
      'image': '../assets/sickness/1.png'
    },
    {
      'image': '../assets/sickness/2.png'
    },
    {
      'image': '../assets/sickness/3.png'
    },
    {
      'image': '../assets/sickness/4.png'
    },
    {
      'image': '../assets/sickness/5.png'
    },
    {
      'image': '../assets/sickness/6.png'
    },
    {
      'image': '../assets/sickness/7.png'
    },
   
  ]






  constructor() { }

  ngOnInit() {
  }

}

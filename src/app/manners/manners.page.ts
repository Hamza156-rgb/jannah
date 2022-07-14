import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manners',
  templateUrl: './manners.page.html',
  styleUrls: ['./manners.page.scss'],
})
export class MannersPage implements OnInit {

  manners = [
    {
      'image': '../assets/manners/1.png'
    },
    {
      'image': '../assets/manners/2.png'
    },
    {
      'image': '../assets/manners/3.png'
    },
    {
      'image': '../assets/manners/4.png'
    },
    {
      'image': '../assets/manners/5.png'
    },
    {
      'image': '../assets/manners/6.png'
    },
    {
      'image': '../assets/manners/7.png'
    },
    {
      'image': '../assets/manners/8.png'
    },
    {
      'image': '../assets/manners/9.png'
    },
    {
      'image': '../assets/manners/10.png'
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}

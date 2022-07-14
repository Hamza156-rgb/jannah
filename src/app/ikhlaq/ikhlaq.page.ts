import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ikhlaq',
  templateUrl: './ikhlaq.page.html',
  styleUrls: ['./ikhlaq.page.scss'],
})
export class IkhlaqPage implements OnInit {
  ikhlaq = [
    {
      'image': '../assets/ikhlaq/1.png'
    },
    {
      'image': '../assets/ikhlaq/2.png'
    },
    {
      'image': '../assets/ikhlaq/3.png'
    },
    {
      'image': '../assets/ikhlaq/4.png'
    },
    {
      'image': '../assets/ikhlaq/5.png'
    },
    {
      'image': '../assets/ikhlaq/6.png'
    },
    {
      'image': '../assets/ikhlaq/7.png'
    },
    {
      'image': '../assets/ikhlaq/8.png'
    },
   
  ]

  constructor() { }

  ngOnInit() {
  }

}

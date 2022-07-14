import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sadqah',
  templateUrl: './sadqah.page.html',
  styleUrls: ['./sadqah.page.scss'],
})
export class SadqahPage implements OnInit {

  sadqah = [
    {
      'image': '../assets/sadqah/1.png'
    },
    {
      'image': '../assets/sadqah/2.png'
    },
    {
      'image': '../assets/sadqah/3.png'
    },
    {
      'image': '../assets/sadqah/4.png'
    },
    {
      'image': '../assets/sadqah/5.png'
    },
    {
      'image': '../assets/sadqah/6.png'
    },
    {
      'image': '../assets/sadqah/7.png'
    },
    {
      'image': '../assets/sadqah/8.png'
    },
    {
      'image': '../assets/sadqah/9.png'
    },
    {
      'image': '../assets/sadqah/10.png'
    },
    {
      'image': '../assets/sadqah/11.png'
    },
    {
      'image': '../assets/sadqah/12.png'
    },
    {
      'image': '../assets/sadqah/13.png'
    },
  
  ]


  constructor() { }

  ngOnInit() {
  }

}

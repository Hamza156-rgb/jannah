import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darood',
  templateUrl: './darood.page.html',
  styleUrls: ['./darood.page.scss'],
})
export class DaroodPage implements OnInit {


  darood = [
    {
      'image': '../assets/durood/1.png'
    },
    {
      'image': '../assets/durood/2.png'
    },
    {
      'image': '../assets/durood/3.png'
    },
    {
      'image': '../assets/durood/4.png'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.page.html',
  styleUrls: ['./quran.page.scss'],
})
export class QuranPage implements OnInit {

  quran = [
    {
      'image': '../assets/quran/1.png'
    },
    {
      'image': '../assets/quran/2.png'
    },
    {
      'image': '../assets/quran/3.png'
    },
    {
      'image': '../assets/quran/4.png'
    },
    {
      'image': '../assets/quran/5.png'
    },
    {
      'image': '../assets/quran/6.png'
    },
   
  ]


  constructor() { }

  ngOnInit() {
  }

}

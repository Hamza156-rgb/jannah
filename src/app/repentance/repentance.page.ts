import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repentance',
  templateUrl: './repentance.page.html',
  styleUrls: ['./repentance.page.scss'],
})
export class RepentancePage implements OnInit {



  repentance = [
    {
      'image': '../assets/repentance/1.png'
    },
    {
      'image': '../assets/repentance/2.png'
    },
  
  ]
  constructor() { }

  ngOnInit() {
  }

}

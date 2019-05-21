import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public imagesUrl: any;

  constructor() { }

  ngOnInit() {
    this.imagesUrl = {
      image1: 'assets/images/SA_Bankruptcy.jpg',
      image2: 'assets/images/SA_immigration.jpg'
    };
  }

}

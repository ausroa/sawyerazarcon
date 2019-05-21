import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public logoUrl: string;
  public navLinks: any[];

  constructor() { }

  ngOnInit() {
    this.logoUrl = 'assets/images/Sawyer-Azarcon-Logo.png';

    this.navLinks = [
      {name: 'areas of practice'},
      {name: 'bankruptcy and immigration attorneys'},
      {name: 'contact us'}
    ];
  }

}

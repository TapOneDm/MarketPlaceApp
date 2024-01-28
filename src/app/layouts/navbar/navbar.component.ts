import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavbarItemComponent,
    RouterModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private navbarRef: ElementRef) {

  }

  public navbarItemsData: Array<any> = [
    {
      icon: 'icon-home-lg',
      text: 'Home',
      bColor: 'rgba(50, 14, 51, 0.6)',
      link: '',
    },
    {
      icon: 'icon-globe',
      text: 'Artificial Intelligence',
      bColor: 'rgba(58, 98, 240, 0.6)',
      link: 'about2',
    },
    {
      icon: 'icon-umbrella',
      text: 'Ecommerce',
      bColor: 'rgba(245, 178, 2, 0.6)',
      link: 'about3',
    },
    {
      icon: 'icon-link',
      text: 'Agency',
      bColor: 'rgba(146, 249, 65, 0.6)',
      link: 'about4',
    },
    {
      icon: 'icon-gift',
      text: 'Desktop App',
      bColor: 'rgba(246, 5, 92, 0.6)',
      link: 'about5',
    },
    {
      icon: 'icon-folder-open',
      text: 'Devolvement tool',
      bColor: 'rgba(130, 4, 255, 0.6)',
      link: 'about6',
    },
    {
      icon: 'icon-book',
      text: 'Tech',
      bColor: 'rgba(25, 168, 235, 0.6)',
      link: 'about7',
    },
    {
      icon: 'icon-cabinet-filing',
      text: 'Marketing',
      bColor: 'rgba(245, 90, 64, 0.6)',
      link: 'about8',
    },
  ];
}

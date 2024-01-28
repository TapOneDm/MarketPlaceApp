import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeaderComponent } from './layouts/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    '[height]': "'100%'"
  }
})
export class AppComponent {
  title = 'my-app';

  @ViewChild('toggleBtn') toggleBtnRef!: ElementRef;
  @ViewChild('navbar') navbarRef!: ElementRef;

  ngAfterViewInit() {
    let toggleBtnNativeEl: any = this.toggleBtnRef.nativeElement; 
    let navbarNativeEl: any = this.navbarRef.nativeElement;
    
    toggleBtnNativeEl.addEventListener('click', () => {
      navbarNativeEl.toggleAttribute('active', !navbarNativeEl.hasAttribute('active'));
    })
  }
}

import { Component } from '@angular/core';
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { SearchComponent } from '../../shared/components/search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LinkButtonComponent,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

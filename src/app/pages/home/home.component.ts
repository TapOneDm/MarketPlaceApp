import { Component } from '@angular/core';
import { GridListComponent } from '../../shared/components/grid-list/grid-list.component';
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { data } from './dummy-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GridListComponent,
    LinkButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public homeItems: Array<any> = []

  ngOnInit() {
    this.homeItems = data
  }
}

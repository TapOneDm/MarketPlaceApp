import { Component, Input } from '@angular/core';
import { GridListItemComponent } from './grid-list-item/grid-list-item.component';

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [
    GridListItemComponent
  ],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss'
})
export class GridListComponent {
  @Input() items: Array<any> = [];

  ngOnInit() {

  }
}

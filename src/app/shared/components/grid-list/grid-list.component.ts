import { Component, Input } from '@angular/core';
import { GridListItemComponent } from './grid-list-item/grid-list-item.component';
import { data } from './dummy-data';

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
  @Input() itemsData: Array<any> = [];

  ngOnInit() {
    this.itemsData = data;
  }
}

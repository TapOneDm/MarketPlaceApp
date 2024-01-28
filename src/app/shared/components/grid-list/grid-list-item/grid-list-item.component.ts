import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-list-item',
  standalone: true,
  imports: [],
  templateUrl: './grid-list-item.component.html',
  styleUrl: './grid-list-item.component.scss'
})
export class GridListItemComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
}

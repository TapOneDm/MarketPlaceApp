import { Component, Input } from '@angular/core';
import { PickedService } from '../../../../core/services/picked.service';

@Component({
  selector: 'app-grid-list-item',
  standalone: true,
  imports: [],
  templateUrl: './grid-list-item.component.html',
  styleUrl: './grid-list-item.component.scss'
})
export class GridListItemComponent {
  @Input() item: any = {};
  public isPicked: boolean = false

  constructor(private pickedService: PickedService) {}

  pick(item: any) {
    
    if (this.isPicked) {
      this.pickedService.unpick(item)
      this.isPicked = false
    } else {
      this.pickedService.pick(item)
      this.isPicked = true
    }
  }

}

import { Component } from '@angular/core';
import { LinkButtonComponent } from '../../shared/components/link-button/link-button.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { PickedService } from '../../core/services/picked.service';


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
  public pickedCount: any;
  constructor(private pickedService: PickedService) {}

  ngOnInit() {
    this.pickedService.getPickedItems().subscribe((items: any) => {
      this.pickedCount = items.length
    })
  }

}

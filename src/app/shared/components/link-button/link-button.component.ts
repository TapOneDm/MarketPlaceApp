import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent {
  @Input() link: string = '';
  @Input() text: string = '';
  @Input() width: string = '100px';
  @Input() icon!: string | null; 
}

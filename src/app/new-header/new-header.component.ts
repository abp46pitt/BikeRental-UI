import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-header.component.html',
  styleUrl: './new-header.component.css'
})
export class NewHeaderComponent {
 authenticated: boolean = false
 authority: string = ''
}

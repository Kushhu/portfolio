import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  stats = [
    { label: 'Projects', value: '15+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Happy Clients', value: '50+' },
    { label: 'Technologies', value: '20+' },
  ];
}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {
  @Input() activeSection: 'home' | 'project' | 'resources' | 'news' = 'home';
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }
}

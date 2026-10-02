import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [RouterLink, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent {
  private readonly route = inject(ActivatedRoute);

  get isPhaseOne(): boolean {
    return this.route.snapshot.url.some(segment => segment.path === 'phase-1');
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventItem, EVENT_ITEMS, FEATURED_NEWS, NewsItem, NEWS_ITEMS } from './news.data';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [RouterLink, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly featuredNews = FEATURED_NEWS;
  readonly newsItems = NEWS_ITEMS;
  readonly eventItems = EVENT_ITEMS;

  get selectedNews(): NewsItem | undefined {
    const id = this.route.snapshot.paramMap.get('id');
    return this.isEventRoute || !id ? undefined : [FEATURED_NEWS, ...NEWS_ITEMS].find(item => item.id === id);
  }

  get selectedEvent(): EventItem | undefined {
    const id = this.route.snapshot.paramMap.get('id');
    return this.isEventRoute && id ? EVENT_ITEMS.find(item => item.id === id) : undefined;
  }

  get isEventRoute(): boolean {
    return this.route.snapshot.url.some(segment => segment.path === 'evenements');
  }

  get isUnknownItem(): boolean {
    return this.route.snapshot.paramMap.has('id') && !this.selectedNews && !this.selectedEvent;
  }
}

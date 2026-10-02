import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  RESOURCE_CATEGORIES,
  RESOURCE_THEMES,
  RESOURCE_TYPES,
  RESOURCE_YEARS,
  RESOURCES,
  filterResources,
  ResourceCategoryId,
  ResourceItem
} from './resources.data';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';

type CategoryFilter = ResourceCategoryId | 'all';

@Component({
  selector: 'app-resources-page',
  standalone: true,
  imports: [CommonModule, RouterLink, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './resources-page.component.html',
  styleUrl: './resources-page.component.scss'
})
export class ResourcesPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly categories = RESOURCE_CATEGORIES;
  readonly types = RESOURCE_TYPES;
  readonly years = RESOURCE_YEARS;
  readonly themes = RESOURCE_THEMES;
  readonly resources = RESOURCES;
  readonly resourceId = this.route.snapshot.paramMap.get('id');
  readonly selectedResource = this.resources.find((resource) => resource.id === this.resourceId);
  readonly isUnknownResource = this.resourceId !== null && this.selectedResource === undefined;

  searchTerm = '';
  selectedCategory: CategoryFilter = 'publications';
  selectedType = 'all';
  selectedYear = 'all';
  selectedTheme = 'all';

  get filteredResources(): ResourceItem[] {
    return filterResources(this.resources, {
      category: this.selectedCategory,
      query: this.searchTerm,
      type: this.selectedType,
      year: this.selectedYear,
      theme: this.selectedTheme
    });
  }

  get activeCategoryTitle(): string {
    return this.selectedCategory === 'all'
      ? 'Toutes les ressources'
      : this.categories.find((category) => category.id === this.selectedCategory)?.title ?? 'Toutes les ressources';
  }

  setSearchTerm(event: Event): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
  }

  setType(event: Event): void {
    this.selectedType = (event.target as HTMLSelectElement).value;
  }

  setYear(event: Event): void {
    this.selectedYear = (event.target as HTMLSelectElement).value;
  }

  setTheme(event: Event): void {
    this.selectedTheme = (event.target as HTMLSelectElement).value;
  }

  selectCategory(category: CategoryFilter): void {
    this.selectedCategory = category;
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedType = 'all';
    this.selectedYear = 'all';
    this.selectedTheme = 'all';
  }

  trackResource(_index: number, resource: ResourceItem): string {
    return resource.id;
  }

}

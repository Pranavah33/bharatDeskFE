import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  private readonly router = inject(Router);

  protected readonly activeTab = signal('Dashboard');

  protected readonly navigationItems = [
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Revenue', icon: 'revenue' },
    { label: 'Master', icon: 'master' },
    { label: 'Products', icon: 'products' },
    { label: 'Tasks', icon: 'tasks' },
  ];

  protected selectTab(label: string): void {
    this.activeTab.set(label);
  }

  protected logout(): void {
    this.router.navigate(['/']);
  }
}

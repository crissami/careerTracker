import { Component, computed, input, output, signal } from '@angular/core';
import { Application } from '../../../core/models/application';

type SortKey = 'company' | 'role' | 'status' | 'priority' | 'dateApplied' | 'nextAction';

@Component({
  imports: [],
  selector: 'app-application-table',
  styleUrl: './application-table.scss',
  templateUrl: './application-table.html',
})
export class ApplicationTable {
  readonly applications = input.required<Application[]>();
  protected readonly edit = output<Application>();
  protected readonly delete = output<Application>();
  protected readonly sortKey = signal<SortKey>('dateApplied');
  protected readonly sortDirection = signal<'asc' | 'desc'>('desc');

  readonly sorted = computed(() => {
    const sortKey = this.sortKey();
    const sortDir = this.sortDirection() === 'asc' ? 1 : -1;
    return [...this.applications()].sort(
      (a, b) => (a[sortKey] ?? '').localeCompare(b[sortKey] ?? '') * sortDir,
    );
  });

  protected sortBy(value: SortKey) {
    if (this.sortKey() === value) {
      this.sortDirection.update((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortKey.set(value);
      this.sortDirection.set('asc');
    }
  }

  protected arrow(key: SortKey): string {
    if (this.sortKey() !== key) return '';
    return this.sortDirection() === 'asc' ? '↑' : '↓';
  }
}

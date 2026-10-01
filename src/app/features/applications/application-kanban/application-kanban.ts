import { Component, computed, input, output } from '@angular/core';
import { Application, STATUSES } from '../../../core/models/application';

@Component({
  imports: [],
  selector: 'app-application-kanban',
  styleUrl: './application-kanban.scss',
  templateUrl: './application-kanban.html',
})
export class ApplicationKanban {
  readonly applications = input.required<Application[]>();
  protected readonly edit = output<Application>();
  protected readonly statuses = STATUSES;
  protected readonly columns = computed(() => {
    return this.statuses.map((status) => ({
      status,
      items: this.applications().filter((a) => a.status === status),
    }));
  });
}

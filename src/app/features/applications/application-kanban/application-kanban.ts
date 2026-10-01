import { Component, computed, input, output } from '@angular/core';
import { Application, Status, STATUSES } from '../../../core/models/application';
import { CdkDropListGroup, CdkDropList, CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  selector: 'app-application-kanban',
  styleUrl: './application-kanban.scss',
  templateUrl: './application-kanban.html',
})
export class ApplicationKanban {
  readonly applications = input.required<Application[]>();
  protected readonly edit = output<Application>();
  protected readonly statuses = STATUSES;
  readonly statusChange = output<{ application: Application; status: Status }>();
  protected readonly columns = computed(() => {
    return this.statuses.map((status) => ({
      status,
      items: this.applications().filter((a) => a.status === status),
    }));
  });

  protected onDrop(event: CdkDragDrop<Status>) {
    if (event.previousContainer === event.container) return;
    this.statusChange.emit({ application: event.item.data, status: event.container.data });
  }
}

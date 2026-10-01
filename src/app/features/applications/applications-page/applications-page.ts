import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { Application } from '../../../core/models/application';
import { Applications } from '../../../core/storage/applications';
import { Router, RouterLink } from '@angular/router';
import { ApplicationTable } from '../application-table/application-table';
import { ApplicationKanban } from '../application-kanban/application-kanban';

type View = 'kanban' | 'table';

@Component({
  imports: [ApplicationTable, ApplicationKanban, RouterLink],
  selector: 'app-applications-page',
  styleUrl: './applications-page.scss',
  templateUrl: './applications-page.html',
})
export class ApplicationsPage implements OnInit {
  protected readonly listApplications = signal<Application[]>([]);
  protected readonly view = signal<View>(
    localStorage.getItem('view') === 'kanban' ? 'kanban' : 'table',
  );
  private applications = inject(Applications);
  private router = inject(Router);

  constructor() {
    effect(() => localStorage.setItem('view', this.view()));
  }

  async ngOnInit() {
    await this.load();
  }

  async onDelete(application: Application) {
    const confirmed = confirm(`Delete ${application.company} — ${application.role}?`);
    if (!confirmed) {
      return;
    }
    await this.applications.remove(application.id);
    await this.load();
  }

  protected onEdit(value: Application) {
    this.router.navigate(['/', value.id, 'edit']);
  }

  protected changeView() {
    this.view.update((v) => (v === 'table' ? 'kanban' : 'table'));
  }

  private async load() {
    const applications = await this.applications.getAll();
    this.listApplications.set(applications);
  }
}

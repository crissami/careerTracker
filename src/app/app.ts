import { Component, inject, OnInit, signal } from '@angular/core';
import { Applications } from './core/storage/applications';
import { Application } from './core/models/application';
import {
  ApplicationForm,
  ApplicationFormValue,
} from './features/applications/application-form/application-form';

@Component({
  imports: [ApplicationForm],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('careerTracker');
  protected readonly listApplications = signal<Application[]>([]);
  protected readonly selected = signal<Application | null>(null);
  private applications = inject(Applications);

  async ngOnInit() {
    await this.load();
  }

  async onSaved(value: ApplicationFormValue) {
    const existing = this.selected();
    const now = new Date().toISOString();

    await this.applications.save({
      ...value,
      id: existing?.id ?? crypto.randomUUID(),
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    });
    await this.load();
    this.selected.set(null);
  }

  async onDelete(application: Application) {
    const confirmed = confirm(`Delete ${application.company} — ${application.role}?`);
    if (!confirmed) {
      return;
    }
    await this.applications.remove(application.id);
    await this.load();
  }

  private async load() {
    const applications = await this.applications.getAll();
    this.listApplications.set(applications);
  }
}

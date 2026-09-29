import { Component, inject, OnInit, signal } from '@angular/core';
import { Application } from '../../../core/models/application';
import { Applications } from '../../../core/storage/applications';
import { ApplicationForm, ApplicationFormValue } from '../application-form/application-form';
import { ApplicationList } from '../application-list/application-list';

@Component({
  imports: [ApplicationForm, ApplicationList],
  selector: 'app-applications-page',
  styleUrl: './applications-page.scss',
  templateUrl: './applications-page.html',
})
export class ApplicationsPage implements OnInit {
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
    this.selected.set(null);
  }

  private async load() {
    const applications = await this.applications.getAll();
    this.listApplications.set(applications);
  }
}

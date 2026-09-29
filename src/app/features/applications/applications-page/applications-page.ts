import { Component, inject, OnInit, signal } from '@angular/core';
import { Application } from '../../../core/models/application';
import { Applications } from '../../../core/storage/applications';
import { Router, RouterLink } from '@angular/router';
import { ApplicationTable } from '../application-table/application-table';

@Component({
  imports: [ApplicationTable, RouterLink],
  selector: 'app-applications-page',
  styleUrl: './applications-page.scss',
  templateUrl: './applications-page.html',
})
export class ApplicationsPage implements OnInit {
  protected readonly listApplications = signal<Application[]>([]);
  private applications = inject(Applications);
  private router = inject(Router);

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

  onEdit(value: Application) {
    this.router.navigate(['/', value.id, 'edit']);
  }

  private async load() {
    const applications = await this.applications.getAll();
    this.listApplications.set(applications);
  }
}

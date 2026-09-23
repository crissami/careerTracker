import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Applications } from './core/storage/applications';
import { Application } from './core/models/application';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('careerTracker');
  protected readonly listApplications = signal<Application[]>([]);
  private applications = inject(Applications);

  async ngOnInit() {
    await this.load();
  }

  async seed() {
    const applicationAdded: Application = {
      id: crypto.randomUUID(),
      company: 'Caseware',
      role: 'Frontend Dev',
      techStack: ['angular', 'node'],
      seniority: 'senior',
      workType: 'remote',
      source: 'linkedin',
      status: 'saved',
      priority: 'A',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    await this.applications.add(applicationAdded);
    await this.load();
  }

  private async load() {
    const applications = await this.applications.getAll();
    this.listApplications.set(applications);
    this.applications.getAll();
  }
}

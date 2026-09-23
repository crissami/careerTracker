import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Applications } from './core/storage/applications';
import { Application } from './core/models/application';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('careerTracker');
  private applications = inject(Applications);

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
  }
}

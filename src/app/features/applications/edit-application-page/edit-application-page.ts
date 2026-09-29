import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Application, ApplicationFormValue } from '../../../core/models/application';
import { Applications } from '../../../core/storage/applications';
import { ApplicationForm } from '../application-form/application-form';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [ApplicationForm, RouterLink],
  selector: 'app-edit-application-page',
  styleUrl: './edit-application-page.scss',
  templateUrl: './edit-application-page.html',
})
export class EditApplicationPage implements OnInit {
  readonly id = input.required<string>();
  protected readonly applications = inject(Applications);
  protected readonly app = signal<Application | null>(null);
  protected readonly router = inject(Router);

  async ngOnInit() {
    const appToSet = await this.applications.getById(this.id());
    if (appToSet) this.app.set(appToSet);
  }

  async onSaved(value: ApplicationFormValue) {
    const existing = this.app();
    if (existing) await this.applications.edit(existing, value);
    this.router.navigate(['/applications']);
  }
}

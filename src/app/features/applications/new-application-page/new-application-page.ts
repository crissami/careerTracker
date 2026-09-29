import { Component, inject } from '@angular/core';
import { ApplicationForm } from '../application-form/application-form';
import { Applications } from '../../../core/storage/applications';
import { Router } from '@angular/router';
import { ApplicationFormValue } from '../../../core/models/application';

@Component({
  imports: [ApplicationForm],
  selector: 'app-new-application-page',
  styleUrl: './new-application-page.scss',
  templateUrl: './new-application-page.html',
})
export class NewApplicationPage {
  protected readonly applications = inject(Applications);
  protected readonly router = inject(Router);
  async onSaved(value: ApplicationFormValue) {
    await this.applications.create(value);
    this.router.navigate(['/applications']);
  }
}

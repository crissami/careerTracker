import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  Application,
  Priority,
  PRIORITIES,
  Seniority,
  SENIORITIES,
  Source,
  SOURCES,
  Status,
  STATUSES,
  TechStack,
  TECH_STACKS,
  WorkType,
  WORK_TYPES,
} from '../../../core/models/application';

export type ApplicationFormValue = Omit<Application, 'id' | 'createdAt' | 'updatedAt'>;

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-application-form',
  styleUrl: './application-form.scss',
  templateUrl: './application-form.html',
})
export class ApplicationForm {
  readonly application = input<Application | null>(null);
  readonly saved = output<ApplicationFormValue>();

  protected readonly statuses = STATUSES;
  protected readonly seniorities = SENIORITIES;
  protected readonly workTypes = WORK_TYPES;
  protected readonly sources = SOURCES;
  protected readonly priorities = PRIORITIES;
  protected readonly techStacks = TECH_STACKS;

  protected readonly form = new FormGroup({
    company: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    role: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    techStack: new FormControl<TechStack[]>([], { nonNullable: true }),
    seniority: new FormControl<Seniority>('mid', { nonNullable: true }),
    workType: new FormControl<WorkType>('remote', { nonNullable: true }),
    location: new FormControl('', { nonNullable: true }),
    salaryMin: new FormControl<number | null>(null),
    salaryMax: new FormControl<number | null>(null),
    jobUrl: new FormControl('', { nonNullable: true }),
    source: new FormControl<Source>('linkedin', { nonNullable: true }),
    dateApplied: new FormControl('', { nonNullable: true }),
    status: new FormControl<Status>('saved', { nonNullable: true }),
    priority: new FormControl<Priority>('B', { nonNullable: true }),
    notes: new FormControl('', { nonNullable: true }),
    nextAction: new FormControl('', { nonNullable: true }),
    nextActionDate: new FormControl('', { nonNullable: true }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.getRawValue();

    this.saved.emit({
      company: raw.company.trim(),
      role: raw.role.trim(),
      techStack: raw.techStack,
      seniority: raw.seniority,
      workType: raw.workType,
      location: optional(raw.location),
      salaryMin: raw.salaryMin ?? undefined,
      salaryMax: raw.salaryMax ?? undefined,
      jobUrl: optional(raw.jobUrl),
      source: raw.source,
      dateApplied: optional(raw.dateApplied),
      status: raw.status,
      priority: raw.priority,
      notes: optional(raw.notes),
      nextAction: optional(raw.nextAction),
      nextActionDate: optional(raw.nextActionDate),
    });

    this.form.reset();
  }
}

/** An untouched text input holds '', but the model means "absent" by `undefined`. */
function optional(value: string): string | undefined {
  const trimmed = value.trim();
  return trimmed === '' ? undefined : trimmed;
}

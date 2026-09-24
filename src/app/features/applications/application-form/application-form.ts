import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Status, STATUSES } from '../../../core/models/application';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-application-form',
  styleUrl: './application-form.scss',
  templateUrl: './application-form.html',
})
export class ApplicationForm {
  readonly saved = output<{ company: string; role: string; status: Status }>();
  protected readonly statuses = STATUSES;

  protected readonly form = new FormGroup({
    company: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    role: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    status: new FormControl<Status>('saved', { nonNullable: true }),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saved.emit(this.form.getRawValue());
    this.form.reset();
  }
}

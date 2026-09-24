import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-application-form',
  styleUrl: './application-form.scss',
  templateUrl: './application-form.html',
})
export class ApplicationForm {
  readonly saved = output<{ company: string; role: string }>();

  protected readonly form = new FormGroup({
    company: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    role: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
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

import { JsonPipe } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-application-form',
  styleUrl: './application-form.scss',
  templateUrl: './application-form.html',
})
export class ApplicationForm {
  readonly saved = output<{ company: string; role: string }>();

  protected readonly form = new FormGroup({
    company: new FormControl('', { nonNullable: true }),
    role: new FormControl('', { nonNullable: true }),
  });

  submit() {
    this.saved.emit(this.form.getRawValue());
    this.form.reset();
  }
}

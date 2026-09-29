import { Component, input, output } from '@angular/core';
import { Application } from '../../../core/models/application';

@Component({
  imports: [],
  selector: 'app-application-table',
  styleUrl: './application-table.scss',
  templateUrl: './application-table.html',
})
export class ApplicationTable {
  readonly applications = input.required<Application[]>();
  protected readonly edit = output<Application>();
  protected readonly delete = output<Application>();
}

import { Component, input, output } from '@angular/core';
import { Application } from '../../../core/models/application';

@Component({
  imports: [],
  selector: 'app-application-list',
  styleUrl: './application-list.scss',
  templateUrl: './application-list.html',
})
export class ApplicationList {
  readonly applications = input.required<Application[]>();
  protected readonly edit = output<Application>();
  protected readonly delete = output<Application>();
}

import { Service } from '@angular/core';
import { Application, ApplicationFormValue } from '../models/application';
import { openDb } from './db';

@Service()
export class Applications {
  async getAll(): Promise<Application[]> {
    const db = await openDb();
    return db.getAll('applications');
  }

  async create(value: ApplicationFormValue) {
    const now = new Date().toISOString();

    await this.save({
      ...value,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    });
  }

  async edit(existing: Application, value: ApplicationFormValue) {
    const now = new Date().toISOString();

    await this.save({
      ...value,
      id: existing?.id ?? crypto.randomUUID(),
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    });
  }
  async remove(id: string): Promise<void> {
    const db = await openDb();
    await db.delete('applications', id);
  }

  async getById(id: string): Promise<Application | undefined> {
    const db = await openDb();
    return db.get('applications', id);
  }

  private async save(application: Application): Promise<void> {
    const db = await openDb();
    await db.put('applications', application);
  }
}

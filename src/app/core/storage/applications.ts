import { Service } from '@angular/core';
import { Application } from '../models/application';
import { openDb } from './db';

@Service()
export class Applications {
  async getAll(): Promise<Application[]> {
    const db = await openDb();
    return db.getAll('applications');
  }

  async add(application: Application): Promise<void> {
    const db = await openDb();
    await db.put('applications', application);
  }
}

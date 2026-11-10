import { IDBFactory } from 'fake-indexeddb';
import { Applications } from './applications';
import { ApplicationFormValue } from '../models/application';

describe('Applications', () => {
  beforeEach(() => {
    globalThis.indexedDB = new IDBFactory();
  });
  it('creates an application and returns it from getAll', async () => {
    const applications = new Applications();
    const value: ApplicationFormValue = {
      company: 'Acme',
      role: 'Frontend Developer',
      techStack: ['angular', 'typescript'],
      seniority: 'mid',
      workType: 'remote',
      source: 'linkedin',
      status: 'applied',
      priority: 'A',
    };

    await applications.create(value);

    const all = await applications.getAll();
    expect(all.length).toBe(1);

    const appSaved = all[0];
    expect(appSaved.company).toBe('Acme');
    expect(appSaved.role).toBe('Frontend Developer');
    expect(appSaved.id).toBeTruthy();
    expect(appSaved.createdAt).toEqual(appSaved.updatedAt);
  });
});

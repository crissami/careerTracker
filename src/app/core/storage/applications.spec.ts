import { IDBFactory } from 'fake-indexeddb';
import { Applications } from './applications';
import { ApplicationFormValue } from '../models/application';

describe('Applications', () => {
  let applications: Applications;
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

  beforeEach(() => {
    globalThis.indexedDB = new IDBFactory();
    applications = new Applications();
  });
  it('creates an application and returns it from getAll', async () => {
    await applications.create(value);

    const all = await applications.getAll();
    expect(all.length).toBe(1);

    const appSaved = all[0];
    expect(appSaved.company).toBe('Acme');
    expect(appSaved.role).toBe('Frontend Developer');
    expect(appSaved.id).toBeTruthy();
    expect(appSaved.createdAt).toEqual(appSaved.updatedAt);
  });

  it('getById returns the application with that id', async () => {
    await applications.create(value);

    const all = await applications.getAll();
    expect(all.length).toBe(1);
    const appSaved = all[0];
    const appSavedId = appSaved.id;
    const appDetails = await applications.getById(appSavedId);

    expect(appDetails).toEqual(appSaved);
  });

  it('remove deletes the application', async () => {
    await applications.create(value);

    const all = await applications.getAll();
    expect(all.length).toBe(1);
    const appSaved = all[0];
    const appSavedId = appSaved.id;
    await applications.remove(appSavedId);

    const allAfterDelete = await applications.getAll();
    expect(allAfterDelete.length).toBe(0);
  });
});

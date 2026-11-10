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

  afterEach(() => {
    vi.useRealTimers();
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

  it('edit updates the fields and keeps id and createdAt', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-01-01T10:00:00Z'));
    await applications.create(value);

    const all = await applications.getAll();
    expect(all.length).toBe(1);
    const appSaved = all[0];

    vi.setSystemTime(new Date('2026-01-01T11:00:00Z'));

    await applications.edit(appSaved, { ...value, role: 'Senior Frontend Developer' });

    const allAfterEdit = await applications.getAll();
    expect(allAfterEdit.length).toBe(1);
    const appAfterEdit = allAfterEdit[0];
    expect(appAfterEdit?.id).toBe(appSaved?.id);
    expect(appAfterEdit?.role).toBe('Senior Frontend Developer');
    expect(appAfterEdit?.createdAt).toBe('2026-01-01T10:00:00.000Z');
    expect(appAfterEdit?.updatedAt).toBe('2026-01-01T11:00:00.000Z');
  });
});

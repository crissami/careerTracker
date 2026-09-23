import { DBSchema, openDB } from 'idb';
import { Application } from '../models/application';
import { Interview } from '../models/interview';

export function openDb() {
  return openDB<CareerTrackerDB>('careerTracker', 1, {
    upgrade(db) {
      db.createObjectStore('applications', { keyPath: 'id' });
      db.createObjectStore('interviews', { keyPath: 'id' });
    },
  });
}

interface CareerTrackerDB extends DBSchema {
  applications: {
    key: string;
    value: Application;
  };
  interviews: {
    key: string;
    value: Interview;
  };
}

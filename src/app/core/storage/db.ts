import { openDB } from 'idb';

export function openDb() {
  return openDB('careerTracker', 1, {
    upgrade(db) {
      db.createObjectStore('applications', { keyPath: 'id' });
      db.createObjectStore('interviews', { keyPath: 'id' });
    },
  });
}

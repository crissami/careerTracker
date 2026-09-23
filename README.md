# careerTracker

A local-first job application tracker. Keep every application, interview and next
step in one place, on your own machine. No account, no server, no data leaving the
browser.

## Why this exists

I am coming back to frontend development after two years away, relearning Angular
from the ground up, and I wanted the practice project to be something I would
actually use every day rather than another todo list. I am job hunting right now,
so the tracker and the person using it are the same person.

It is built in public, one small step at a time, and I write about the process as
I go. https://theiterations.substack.com/

## Status

Work in progress — week 1 of 6. Not usable yet.

## Stack

- **Angular 22** — standalone components, signals, zoneless, new control flow
- **Tailwind CSS v4** — styling
- **Angular CDK** — drag and drop for the kanban board
- **IndexedDB** via [`idb`](https://github.com/jakearchibald/idb) — all data stays in the browser
- **Vitest** — unit tests on the parts worth testing
- No backend, no authentication, no AI

## Running locally

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

Other commands:

```bash
npm run build    # production build into dist/
npm test         # unit tests
```

## Roadmap

The scope below is locked for the first release. New ideas go to `IDEAS.md`.

- [x] Project setup, Tailwind, data model
- [x] IndexedDB storage service, first list
- [ ] Create, edit and delete applications with Reactive Forms
- [ ] Table view and kanban board with a toggle between them
- [ ] Filtering by status, tech, seniority, work type and priority, plus sorting
- [ ] Interviews attached to an application
- [ ] Export and import the whole database as JSON
- [ ] Responsive layout and dark mode
- [ ] Deploy

### What an application holds

Company, role, tech stack, seniority, work type, location, salary range, job URL,
source, date applied, status, priority, notes, and the next action with its date.

Status pipeline: saved → applied → screening → interview → offer → rejected →
archived.

## Data and privacy

Everything lives in your browser's IndexedDB. Nothing is uploaded anywhere. That
also means clearing your browser data deletes your applications, so export to JSON
if you care about them.

## License

MIT

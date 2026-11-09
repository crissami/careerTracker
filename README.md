# careerTracker

A job application tracker I am building to get back into development after two
years away. It started as a local-first Angular app and is growing into a
full-stack one: Angular on the front, NestJS and PostgreSQL behind it.

## Why this exists

I relearned Angular from the ground up on this project, and now I am using it to
learn the backend side too. I wanted the practice project to be something I would
actually use rather than another todo list. I am job hunting right now, so the
person building the tracker and the person using it are the same.

It is built in public, one small step at a time. I write about the process at
[Iterations](https://theiterations.substack.com/).

## Status

The frontend basics work locally. There are no tests and no backend yet; both are
next on the roadmap below.

## What works today

- Create, edit and delete applications, with Reactive Forms and validation
- A table view, sortable by column
- A kanban board by status, with drag and drop between columns
- A toggle between table and kanban, remembered between visits
- All data stored in the browser's IndexedDB

## Stack

Today:

- **Angular 22**: standalone components, signals, zoneless, new control flow
- **Tailwind CSS v4**: styling
- **Angular CDK**: drag and drop for the kanban board
- **IndexedDB** via [`idb`](https://github.com/jakearchibald/idb): storage in the browser

Planned, not built yet:

- **Vitest**: unit tests
- **NestJS** and **PostgreSQL**, with Docker Compose for local development
- Session-based authentication with an HttpOnly cookie and CSRF protection
- GitHub Actions running the tests, then a deploy

## Running locally

```bash
npm install
npm start
```

Then open `http://localhost:4200/`.

```bash
npm run build    # production build into dist/
```

## Roadmap

New ideas go to `IDEAS.md`, not into the current phase.

### Done

- [x] Project setup, Tailwind, data model
- [x] IndexedDB storage service
- [x] Create, edit and delete applications with Reactive Forms
- [x] Table view with sorting, kanban board with drag and drop, toggle between them

### Phase 1: foundation (current)

- [ ] Unit tests with Vitest, starting with the storage service
- [ ] Error handling in the storage layer, with one shared database connection
- [ ] Load data with `resource()` instead of `ngOnInit`

### Phase 2: backend

- [ ] NestJS API for applications and interviews
- [ ] Interviews attached to an application, in the UI
- [ ] PostgreSQL, run locally with Docker Compose
- [ ] Session authentication with an HttpOnly cookie and CSRF protection
- [ ] Export and import as JSON, also used to move existing data to the server

### Phase 3: ship

- [ ] GitHub Actions running the tests on every push
- [ ] Deploy

### Later, not scheduled

- Filtering by status, tech, seniority, work type and priority
- Responsive layout and dark mode

### What an application holds

Company, role, tech stack, seniority, work type, location, salary range, job URL,
source, date applied, status, priority, notes, and the next action with its date.

Statuses: saved, applied, screening, interview, offer, rejected, archived.

## Data and privacy

Today everything lives in your browser's IndexedDB and nothing is uploaded.
Clearing your browser data deletes your applications, and there is no export yet.

When the backend lands in Phase 2, data moves to a PostgreSQL database behind a
login, and this section will be rewritten.

## License

MIT

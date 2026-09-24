# Ideas

Parked ideas that are out of scope for the first release. The MVP is locked; this
file is where new ideas go instead of into the code.

## Salary with currency and period

`salaryMin` / `salaryMax` are bare numbers, so they cannot say what the number
means. Real ads mix units: Worldly listed 45k–75k USD per year, Smart Apartment
listed 4000–4500 USD per month. Today the monthly one has to be converted to a
yearly equivalent by hand and explained in the notes, which is a lie waiting to be
misread.

Would need a currency field, a period field (`year` / `month`), and a decision
about whether the list normalizes for sorting and comparison.

Found while importing real applications on 2026-09-24.

## A richer source field

`source` is `linkedin | direct | referral | other`, which collapses things worth
telling apart: applying on a company site, emailing a person directly, an internal
referral, a recruiter reaching out first. Four buckets were not enough for a real
set of sixteen applications.

## Interview timeline

The MVP shows interviews as a plain list under an application. A timeline view
would read better once there are several rounds per application.

Parked on 2026-09-21, when the MVP was agreed.

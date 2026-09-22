export const SENIORITIES = ['junior', 'mid', 'senior', 'lead'] as const;
export type Seniority = (typeof SENIORITIES)[number];

export const STATUSES = [
  'saved',
  'applied',
  'screening',
  'interview',
  'offer',
  'rejected',
  'archived',
] as const;
export type Status = (typeof STATUSES)[number];

export const WORK_TYPES = ['remote', 'hybrid', 'onsite'] as const;
export type WorkType = (typeof WORK_TYPES)[number];

export const SOURCES = ['linkedin', 'direct', 'referral', 'other'] as const;
export type Source = (typeof SOURCES)[number];

export const PRIORITIES = ['A', 'B', 'C'] as const;
export type Priority = (typeof PRIORITIES)[number];

export const TECH_STACKS = [
  'angular',
  'react',
  'vue',
  'node',
  'python',
  'typescript',
  'javascript',
  'rxjs',
  'ngrx',
  'tailwind',
  'graphql',
  'other',
] as const;
export type TechStack = (typeof TECH_STACKS)[number];

export interface Application {
  id: string;
  company: string;
  role: string;
  techStack: TechStack[];
  seniority: Seniority;
  workType: WorkType;
  location?: string;
  salaryMin?: number;
  salaryMax?: number;
  jobUrl?: string;
  source: Source;
  dateApplied?: string;
  status: Status;
  priority: Priority;
  notes?: string;
  nextAction?: string;
  nextActionDate?: string;
  createdAt: string;
  updatedAt: string;
}

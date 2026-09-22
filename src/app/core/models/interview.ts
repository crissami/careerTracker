export const INTERVIEW_TYPES = [
  'screening',
  'tech',
  'behavioral',
  'system_design',
  'culture_fit',
  'final',
] as const;
export type InterviewType = (typeof INTERVIEW_TYPES)[number];

export const INTERVIEW_OUTCOMES = ['waiting', 'passed', 'failed'] as const;
export type InterviewOutcome = (typeof INTERVIEW_OUTCOMES)[number];

export interface Interview {
  id: string;
  applicationId: string;
  date: string;
  type: InterviewType;
  interviewer?: string;
  notes: string;
  outcome: InterviewOutcome;
  createdAt: string;
  updatedAt: string;
}

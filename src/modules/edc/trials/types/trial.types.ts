// import { Stringifier } from "postcss";
import { z } from "zod";

// select options
export interface ISelectOptions {
  label: string;
  value: string;
}

// input field structure
export interface IFormStructureType {
  title: string;
  titleDesc: string;
  config: IInputConfig;
}

// input field congurations
export interface IInputConfig {
  name: keyof ITrialFormDataType;
  placeholder?: string;
  type: "text" | "number" | "textarea" | "email" | "date" | "file" | "select";
  required: boolean;
  // for select field
  options?: ISelectOptions[];
  min?: number;
  max?: number;
}

// field renderer types
export type IRenderFieldTypes = (config: IInputConfig) => React.ReactNode;

// team members for trial
export interface IMembers {
  email: string;
  role: string;
}

// uplaod file interface
export interface IUploadFileData {
  id: string;
  file: File;
  name: string; // <-- This is likely the field you meant
  filetype: "protocol" | "crf";
  url: string;
  progress?: number;
  createdAt: string;
  updatedAt: string;
  filename:string;
}


export interface IMediaFile {
  doc_name: string;
  doc_type: string;
  media_url: string;
  created_at: string;
  updated_at: string;
}

export type comparatorDetails = {
  name: string;
  units: string;
  dosage: string;
};

export type comparatorDetailsData = comparatorDetails[];
// trial file interface
export interface ITrialFormDataType {
  protocolNumber: string;
  studyTitle: string;
  studyDescription: string;
  indication: string;
  studyType: string;
  phase: string;
  studyArms: string;
  comparatorDetails: comparatorDetails[];
  subjectsCount: number;
  kitsCount: number;
  startTrialDate: string | Date;

  sponsorName: string | null;
  teamMembers: IMembers[];
  media: IUploadFileData[];
}

// Short Trial info
export const TrialSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  phase: z.string().min(1),
  indication: z.string().min(1),
  sponsor: z.string().optional().nullable(),
  startdate: z.string(),
  protocol_number: z.string(),
  created_at:z.date()
});

export type ITrial = z.infer<typeof TrialSchema>;

export const DraftTrialsSchema = z.object({
  id: z.string().uuid(),
  title: z.string().optional(),
  phase: z.string().optional(),
  indication: z.string().optional(),
  sponsor: z.string().optional().nullable(),
  startdate: z.string(),
  protocol_number: z.string().optional(),
  created_at:z.date(),
});

export type IDraftTrial = z.infer<typeof DraftTrialsSchema>;

export interface ITrialDetailsCard {
  phase: string;
  description: string;
  sponsor: string | null;
  company: string;
  indication: string;
  drugname: string;
  disease: string;
  startDate: Date | null;
  endDate: Date | null;
  media: IUploadFileData[] | null;
  comparatorDetails: comparatorDetails[] | null;
  studyType: string;
  studyArms: string;
  studyTitle?: string;
  subjectsCount: number;
  kitsCount: number;
  showTrialNameModal?: boolean;
  protocolNumber?: string;
}

export interface IUploadCardTypes {
  id: string;
  docName: string;
  docCategory: string;
  docSize: string;
  uploadDate: string;
  url: string;
  progress: number;
}

export interface ITrialDraftFormResponse {
  created_at: string;
  id: string;
  organisation_id: string;
  trial_form_data: ITrialFormDataType;
  updated_at: string;
  user_id: string;
}

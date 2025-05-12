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
  name: string;
  type: "protocol" | "crf";
  url: string;
}

// trial file interface
export interface ITrialFormDataType {
  studyTitle: string;
  studyDescription: string;
  indication: string;
  studyType: string;
  phase: string;
  studyArms: string;
  subjectsCount: number;
  kitsCount: number;
  startTrialDate: string;
  sponsorName: string;
  studyEmail: string;
  studyContactName: string;
  sponsorPhone: string;
  teamMembers: IMembers[];
  media: IUploadFileData[];
}

// Short Trial info
export const TrialSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  phase: z.string().min(1),
  indication: z.string().min(1),
  sponsor: z.string().min(1),
  startdate: z.string(),
});

export type ITrial = z.infer<typeof TrialSchema>;


export interface ITrialDetailsCard {
  phase: string;
  description: string;
  sponsor: string;
  email: string;
  phone: string;
  company: string;
  indication: string;
  drugname: string;
  disease: string;
  startDate: string;
  endDate: string | null;
  media: {
    filename: string;
    uploaddate: string;
    filetype: string;
    url: string;
    createdAt: string;
    updatedAt: string;
  }[];

  showTrialNameModal?: boolean;
  setShowTrialNameModal?: React.Dispatch<React.SetStateAction<boolean>>;

  showSponsorModal?: boolean;
  setShowSponsorModal?: React.Dispatch<React.SetStateAction<boolean>>;

  showIndicationModal?: boolean;
  setShowIndicationModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUploadCardTypes {
  id: string;
  docName: string;
  docCategory: string;
  docSize: string;
  uploadDate: string;
}

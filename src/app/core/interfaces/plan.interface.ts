import { Statuses } from "@core/enums/statuses.enum";
import { IFile } from "./files.interface";

export interface IPlan {
  id: number,
  faTitle: string,
  enTitle: string,
  files: IFile[],
  status: Statuses,
  description: string,

  statusClass: string,
}

export interface IPlanDetails {
  id: number,
  faTitle: string,
  enTitle: string,
  files: IFile[],
  status: Statuses,
  description: string,
}
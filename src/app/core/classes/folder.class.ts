import { IFolder } from "@core/interfaces/folder.interface";

export class Folder implements IFolder {
  public constructor(
    public id: number,
    public faTitle: string,
    public enTitle: string,
    public subject: string,
  ) { }
}
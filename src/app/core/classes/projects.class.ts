import { IProjects } from "@core/interfaces/projects.interface";

export class Projects implements IProjects {
  public constructor(
    public id: number,
    public faTitle: string,
    public enTitle: string,
    public employer: string,
    public researchGroups: string | string[],
    public executor: string,
    public progressPercentage: number,
  ) { }
}
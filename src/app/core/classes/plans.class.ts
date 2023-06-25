import { Statuses } from "@core/enums/statuses.enum";
import { IFile } from "@core/interfaces/files.interface";
import { IPlan, IPlanDetails } from "@core/interfaces/plan.interface";
import { BaseClass } from "./base.class";

export class Plan extends BaseClass implements IPlan {

  public constructor(
    public id: number,
    public faTitle: string,
    public enTitle: string,
    public files: IFile[],
    public status: Statuses,
    public description: string,
  ) {
    super();
    let model: IPlan;
    Object.assign(this, model);
  }

  /**
   * status class name
   * @returns string
   */
  public get statusClass(): string {
    if (this.status == Statuses.Close) return 'close'
    else if (this.status == Statuses.Done) return 'done'
    else if (this.status == Statuses.Error) return 'error'
    else if (this.status == Statuses.Open) return 'open'
    else if (this.status == Statuses.Pending) return 'pending'
    else if (this.status == Statuses.Success) return 'success'
    else return ''
  }

  /**
   * status name
   * @returns string
   */
  public get statusName(): string {
    if (this.status == Statuses.Close) return 'بسته'
    else if (this.status == Statuses.Done) return 'انجام شد'
    else if (this.status == Statuses.Error) return 'خطا'
    else if (this.status == Statuses.Open) return 'باز'
    else if (this.status == Statuses.Pending) return 'در حال انجام'
    else if (this.status == Statuses.Success) return 'موفق'
    else return ''
  }
}

export class PlanDetails implements IPlanDetails {
  public constructor(
    public id: number,
    public faTitle: string,
    public enTitle: string,
    public files: IFile[],
    public status: Statuses,
    public description: string,
  ) {
    let model: IPlanDetails;
    Object.assign(this, model);
  }

  /**
   * status class name
   * @returns string
   */
  public get statusClass(): string {
    if (this.status == Statuses.Close) return 'close'
    else if (this.status == Statuses.Done) return 'done'
    else if (this.status == Statuses.Error) return 'error'
    else if (this.status == Statuses.Open) return 'open'
    else if (this.status == Statuses.Pending) return 'pending'
    else if (this.status == Statuses.Success) return 'success'
    else return ''
  }

  /**
   * status name
   * @returns string
   */
  public get statusName(): string {
    if (this.status == Statuses.Close) return 'بسته'
    else if (this.status == Statuses.Done) return 'انجام شد'
    else if (this.status == Statuses.Error) return 'خطا'
    else if (this.status == Statuses.Open) return 'باز'
    else if (this.status == Statuses.Pending) return 'در حال انجام'
    else if (this.status == Statuses.Success) return 'موفق'
    else return ''
  }
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { IResearchGroups } from '@core/interfaces/research-groups.interface';

@Component({
  selector: 'app-research-groups',
  templateUrl: './research-groups.component.html',
  styleUrls: ['./research-groups.component.scss']
})
export class ResearchGroupsComponent extends BaseComponent implements OnInit {

  @Output() public closedOperation: EventEmitter<void> = new EventEmitter<void>();
  @Output() public submittedOperation: EventEmitter<void> = new EventEmitter<void>();
  
  public dialogTitle!: string;
  public isShowAddResearchGroupForm: boolean = false;
  public isSelectedResearchGroup: boolean = false;
  public researchGroupsCheckedlist: IResearchGroups[];
  public researchGroupsChecklists: IResearchGroups[] = [
    {
      id: 1,
      name: 'اسم گروه پژوهشی',
      managementType: 'نوع مدیریت',
      isSelected: false,
    },
    {
      id: 2,
      name: 'اسم گروه پژوهشی',
      managementType: 'نوع مدیریت',
      isSelected: false,
    },
    {
      id: 3,
      name: 'اسم گروه پژوهشی',
      managementType: 'نوع مدیریت',
      isSelected: false,
    },
    {
      id: 4,
      name: 'اسم گروه پژوهشی',
      managementType: 'نوع مدیریت',
      isSelected: false,
    },
    {
      id: 5,
      name: 'اسم گروه پژوهشی',
      managementType: 'نوع مدیریت',
      isSelected: false,
    },
    {
      id: 6,
      name: 'اسم گروه پژوهشی',
      managementType: 'نوع مدیریت',
      isSelected: false,
    },
  ];

  constructor() {
    super();
    this.getResearchGroupsCheckedlist();
  }

  ngOnInit(): void {
    console.log(this.dialogTitle);
  }

  /**
   * check or unckeck all research groups
   */
  public checkUncheckAllResearchGroups() {
    for (var i = 0; i < this.researchGroupsChecklists.length; i++) {
      this.researchGroupsChecklists[i].isSelected = this.isSelectedResearchGroup;
    }
    this.getResearchGroupsCheckedlist();
  }

  /**
   * is all research groups selected?
   */
  public isAllResearchGroupsSelected() {
    this.isSelectedResearchGroup = this.researchGroupsChecklists.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getResearchGroupsCheckedlist();
  }

  /**
   * get research group checked lists
   */
  public getResearchGroupsCheckedlist() {
    this.researchGroupsCheckedlist = [];
    for (var i = 0; i < this.researchGroupsChecklists.length; i++) {
      if (this.researchGroupsChecklists[i].isSelected) {
        this.researchGroupsCheckedlist.push(this.researchGroupsChecklists[i]);
      }
    }
    this.researchGroupsCheckedlist = this.researchGroupsCheckedlist;
  }

  /**
   * submit operation
   */
  public submitOperation() {
    this.submittedOperation.emit();
  }

  /**
   * close operation
   */
  public closeOperation() {
    this.closedOperation.emit();
  }

}

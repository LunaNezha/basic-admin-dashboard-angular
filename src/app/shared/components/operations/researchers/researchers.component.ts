import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { IResearchers } from '@core/interfaces/researchers.interface';

@Component({
  selector: 'app-researchers',
  templateUrl: './researchers.component.html',
  styleUrls: ['./researchers.component.scss']
})
export class ResearchersComponent extends BaseComponent implements OnInit {

  @Output() public closedOperation: EventEmitter<void> = new EventEmitter<void>();
  @Output() public submittedOperation: EventEmitter<void> = new EventEmitter<void>();
  
  public dialogTitle!: string;
  public isShowAddResearchersForm: boolean = false;
  public isSelectedResearcher: boolean = false;
  public researcherCheckedlists: IResearchers[];
  public researcherChecklists: IResearchers[] = [
    {
      id: 1,
      name: 'نام پژوهشگر',
      activePlan: 2,
      isSelected: false,
    },
    {
      id: 2,
      name: 'نام پژوهشگر',
      activePlan: 3,
      isSelected: false,
    },
    {
      id: 3,
      name: 'نام پژوهشگر',
      activePlan: 1,
      isSelected: false,
    },
    {
      id: 4,
      name: 'نام پژوهشگر',
      activePlan: 0,
      isSelected: false,
    },
    {
      id: 5,
      name: 'نام پژوهشگر',
      activePlan: 2,
      isSelected: false,
    },
    {
      id: 6,
      name: 'نام پژوهشگر',
      activePlan: 1,
      isSelected: false,
    },
  ];

  constructor() {
    super();
    this.getResearcherCheckedlist();
  }

  ngOnInit(): void {
    
  }

  /**
   * check or unckeck all researcher
   */
  public checkUncheckAllResearcher() {
    for (var i = 0; i < this.researcherChecklists.length; i++) {
      this.researcherChecklists[i].isSelected = this.isSelectedResearcher;
    }
    this.getResearcherCheckedlist();
  }

  /**
   * is all researcher selected?
   */
  public isAllResearcherSelected() {
    this.isSelectedResearcher = this.researcherChecklists.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getResearcherCheckedlist();
  }

  /**
   * get researcher checked lists
   */
  public getResearcherCheckedlist() {
    this.researcherCheckedlists = [];
    for (var i = 0; i < this.researcherChecklists.length; i++) {
      if (this.researcherChecklists[i].isSelected) {
        this.researcherCheckedlists.push(this.researcherChecklists[i]);
      }
    }
    this.researcherCheckedlists = this.researcherCheckedlists;
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

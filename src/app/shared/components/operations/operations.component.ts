import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { OperationTypes } from '@core/enums/operations.enum';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent extends BaseComponent implements OnInit {

  @Input() public operationType!: OperationTypes;
  @Input() public displayOperationDialog: boolean = false;
  @Output() public operationDialogClosed: EventEmitter<void> = new EventEmitter();
  @Output() public operationSubmitted: EventEmitter<void> = new EventEmitter();

  public dialogTitle!: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.getDialogTitles();
  }

  /**
   * get dialog titles
   * @returns :string
   */
  public getDialogTitles(): string {
    const checker: { [key in OperationTypes]: string } = {
      0: this.languageFiles.titles.research_groups,
      1: this.languageFiles.titles.researchers,
      2: this.languageFiles.titles.research_council,
      3: this.languageFiles.titles.plan_approval,
      4: this.languageFiles.titles.send_suggestion,
      5: this.languageFiles.titles.review_suggestion,
      6: this.languageFiles.titles.correction_description
    };

    const result: string = checker[this.operationType ?? -1];
    return result;
  }

  /**
 * submit operation
 * @returns void
 */
  public submitOperation() {
    this.operationSubmitted.emit();
  }

  /**
   * close operation dialog         
   * @returns : void
   */
  public closeOperationDialog() {
    this.displayOperationDialog = false;
    this.operationDialogClosed.emit();
  }
}

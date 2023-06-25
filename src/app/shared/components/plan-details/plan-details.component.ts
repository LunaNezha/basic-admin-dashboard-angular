import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanDetails } from '@core/classes/plans.class';
import { BaseComponent } from '@core/components/base.component';
import { PlansService } from '@core/service/plans.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent extends BaseComponent implements OnInit {

  public planId: number = 0;
  public planDetails!: PlanDetails;
  public displayRejectPlanDialog: boolean = false;
  public displayOperationDialog: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private planService: PlansService
  ) {
    super();

    this.changeLayoutService.showSidebar();
    this.changeLayoutService.showTopbar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit(): void {
    this.getParamValues();
    this.getPlanDetails();
  }

  /**
   * get param values from url
   */
  public getParamValues() {
    this.subs.sink = this.route.queryParams.subscribe(
      (params) => {
        this.planId = params.id;
      }
    );
  }

  /**
   * get plan details
   */
  public getPlanDetails() {
    this.subs.sink = this.planService.getPlanDetails(this.planId).subscribe(
      (res) => {
        this.planDetails = res;
        console.log(res);

      }
    )
  }

}

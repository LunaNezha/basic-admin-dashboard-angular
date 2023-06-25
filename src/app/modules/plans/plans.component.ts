import { Component, OnInit, ViewChild } from '@angular/core';
import { Plan } from '@core/classes/plans.class';
import { BaseComponent } from '@core/components/base.component';
import { PlansService } from '@core/service/plans.service';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent extends BaseComponent implements OnInit {

  @ViewChild('dt') table: Table;

  public plans: Plan[];
  public plansDataSource: Plan[];
  public selectedPlan!: Plan;
  public selectedPlans: Plan[] = [];
  public downloadLoader: boolean = false;
  public loading: boolean = true;
  public totalRecords: number = 0;
  public contentMenuItems: MenuItem[] = [
    { label: this.languageFiles.buttons.edit, icon: 'fi fi-rr-pencil', command: () => this.editPlan(this.selectedPlan) },
    { label: this.languageFiles.buttons.delete, icon: 'fi fi-rr-trash', command: () => this.deletePlan(this.selectedPlan) },
    { label: this.languageFiles.buttons.download_files, icon: 'fi fi-rr-trash', command: () => this.downloadPlanFiles(this.selectedPlan) }
  ];
  
  constructor(private planService: PlansService,) {
    super();
    
    this.changeLayoutService.showSidebar();
    this.changeLayoutService.showTopbar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit(): void {
    this.getPlans();
  }

  /**
   * get plans
   */
  public getPlans() {
    this.planService.getPlans().subscribe(
      (res: any) => {
        this.plansDataSource = res;
        this.totalRecords = res.length;
      }
    );
  }

  /**
   * load plans
   * @param event : LazyLoadEvent
   */
  public loadPlans(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.plansDataSource) {
        this.plans = this.plansDataSource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

  /**
   * edit plan
   */
  public editPlan(plan: Plan) {
    this.toastr.add({ severity: 'info', summary: 'طرح با موفقیت ویرایش شد' });
  }

  /**
   * delete plan
   */
  public deletePlan(plan: Plan) {
    this.toastr.add({ severity: 'info', summary: 'طرح با موفقیت حذف شد.' });
  }

  /**
   * download plan files
   */
  public downloadPlanFiles(plan: Plan): void {
    this.toastr.add({ severity: 'success', summary: 'فایل ها با موفقیت دانلود شدند.' });
    this.planService.download(plan.files[0].url).subscribe(
      (res) => {
        saveAs(res, 'archive.zip')
      }
    );
  }

  /**
   * load files
   * @param index 
   */
  public loadFiles(id: number) {
    this.downloadLoader = true;
    setTimeout(() => this.downloadLoader = false, 1000);
  }

  /**
   * export Excel
   */
  public exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.plans);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'plans');
    });
  }

}

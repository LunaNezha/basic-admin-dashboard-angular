import { Component, OnInit, ViewChild } from '@angular/core';
import { Projects } from '@core/classes/projects.class';
import { BaseComponent } from '@core/components/base.component';
import { ProjectsService } from '@core/service/projects.service';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends BaseComponent implements OnInit {

  @ViewChild('dt') table: Table;

  public projects: Projects[];
  public projectsDataSource: Projects[];
  public selectedProject!: Projects;
  public selectedProjects: Projects[] = [];
  public loading: boolean = true;
  public totalRecords: number = 0;
  public contentMenuItems: MenuItem[] = [
    { label: this.languageFiles.buttons.edit, icon: 'fi fi-rr-pencil', command: () => this.editProject(this.selectedProject) },
    { label: this.languageFiles.buttons.delete, icon: 'fi fi-rr-trash', command: () => this.deleteProject(this.selectedProject) }
  ];
  public projectTableHeaders: string[] = [
    this.languageFiles.global.row,
    this.languageFiles.titles.title,
    this.languageFiles.titles.employer,
    this.languageFiles.titles.research_groups,
    this.languageFiles.titles.executor,
    this.languageFiles.titles.progress_percentage
  ]

  constructor(private projectService: ProjectsService,) {
    super();

    this.changeLayoutService.showSidebar();
    this.changeLayoutService.showTopbar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit(): void {
    this.getProjects();
  }

  /**
   * get project
   */
  public getProjects() {
    this.projectService.getProjects().subscribe(
      (res: any) => {
        this.projectsDataSource = res;
        this.totalRecords = res.length;
      }
    );
  }

  /**
   * load projects
   * @param event : LazyLoadEvent
   */
  public loadProjects(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.projectsDataSource) {
        this.projects = this.projectsDataSource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

  /**
   * edit project
   */
  public editProject(project: Projects) {
    this.toastr.add({ severity: 'info', summary: 'پروژه با موفقیت ویرایش شد' });
  }

  /**
   * delete project
   */
  public deleteProject(project: Projects) {
    this.toastr.add({ severity: 'info', summary: 'پروژه با موفقیت حذف شد.' });
  }

  /**
   * export PDF
   */
  public exportPdf() {
    var doc = new jsPDF();

    (doc as any).autoTable({
      head: this.projectTableHeaders,
      body: this.projects,
      theme: 'plain',
    });

    doc.save('projects.pdf');
  }

  /**
   * export Excel
   */
  public exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.projects);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'projects');
    });
  }

}

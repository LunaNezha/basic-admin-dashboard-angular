import { Component, OnInit, ViewChild } from '@angular/core';
import { Folder } from '@core/classes/folder.class';
import { BaseComponent } from '@core/components/base.component';
import { FolderService } from '@core/service/folder.service';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent extends BaseComponent implements OnInit {

  @ViewChild('dt') table: Table;

  public folders: Folder[];
  public foldersDataSource: Folder[];
  public selectedFolder!: Folder;
  public selectedFolders: Folder[] = [];

  public loading: boolean = true;
  public totalRecords: number = 0;
  public contentMenuItems: MenuItem[] = [
    { label: this.languageFiles.buttons.show, icon: 'fi fi-rr-eye', command: () => this.showFolder(this.selectedFolder) },
    { label: this.languageFiles.buttons.edit, icon: 'fi fi-rr-pencil', command: () => this.editFolder(this.selectedFolder) },
    { label: this.languageFiles.buttons.delete, icon: 'fi fi-rr-trash', command: () => this.deleteFolder(this.selectedFolder) },
  ];

  constructor(private folderService: FolderService) {
    super();

    this.changeLayoutService.showSidebar();
    this.changeLayoutService.showTopbar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit(): void {
    this.getFolders();
  }

  /**
   * get folder
   */
  public getFolders() {
    this.folderService.getFolders().subscribe(
      (res: any) => {
        this.foldersDataSource = res;
        this.totalRecords = res.length;
      }
    );
  }

  /**
   * load folder
   * @param event : LazyLoadEvent
   */
  public loadFolders(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      if (this.foldersDataSource) {
        this.folders = this.foldersDataSource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

  /**
   * edit folder
   */
  public showFolder(project: Folder) {

  }

  public editFolder(project: Folder) {

  }

  public deleteFolder(project: Folder) {

  }

  /**
   * export Excel
   */
  public exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.folders);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'folders');
    });
  }

}

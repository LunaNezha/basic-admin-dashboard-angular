import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent extends BaseComponent implements OnInit {

  public employers: string[] = [
    'نفر اول',
    'نفر دوم',
    'نفر سوم',
    'نفر چهارم',
    'نفر پنجم',
    'نفر ششم',
  ];

  public researchGroups: string[] = [
    'نفر اول',
    'نفر دوم',
    'نفر سوم',
    'نفر چهارم',
    'نفر پنجم',
    'نفر ششم',
  ];

  public projectManagement: string[] = [
    'نفر اول',
    'نفر دوم',
    'نفر سوم',
    'نفر چهارم',
    'نفر پنجم',
    'نفر ششم',
  ];

  public executors: string[] = [
    'نفر اول',
    'نفر دوم',
    'نفر سوم',
    'نفر چهارم',
    'نفر پنجم',
    'نفر ششم',
  ];

  constructor() {
    super();
    
    this.changeLayoutService.showSidebar();
    this.changeLayoutService.showTopbar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { SubSink } from 'subsink';
import { AppModule } from '../../app.module';
import { languageDetails } from '@core/classes/language.class';
import { Culture } from '@core/enums/cultures.enum';
import { LanguageService } from '@core/service/language.service';
import { interval } from 'rxjs';
var persianLang = require('../../../assets/translate/fa.json');
var englishLang = require('../../../assets/translate/en.json');
import * as FileSaver from 'file-saver';
import { ChangeLayoutService } from '@core/service/change-layout.service';
import { OperationTypes } from '@core/enums/operations.enum';


@Component({
  template: '',
})
export class BaseComponent implements OnInit {

  /**
   * * =========== Services ===========
   */
  public toastr: MessageService;
  public router: Router;
  public translate: TranslateService;
  public languageService: LanguageService;
  public changeLayoutService: ChangeLayoutService;
  public http: HttpClient;

  /**
   * * =========== Variables ===========
   */

  public timeRemaining: number = 120;
  public currentLang!: languageDetails;
  public subs: SubSink = new SubSink();
  public operationTypes: typeof OperationTypes = OperationTypes;

  constructor() {
    this.toastr = AppModule.injector.get(MessageService);
    this.router = AppModule.injector.get(Router);
    this.changeLayoutService = AppModule.injector.get(ChangeLayoutService);
    this.languageService = AppModule.injector.get(LanguageService);
    this.http = AppModule.injector.get(HttpClient);
    this.translate = AppModule.injector.get(TranslateService);
    this.translate.setDefaultLang(Culture.FA);
    this.translate.currentLang = Culture.FA;
    this.subs.sink = this.languageService.currentLanguage.subscribe(
      (result) => (this.currentLang = result)
    );
  }

  ngOnInit() { }

  /**
   * language files
   */
  public get languageFiles() {
    if (this.currentLang?.culture == Culture.FA) {
      return persianLang;
    } else {
      return englishLang;
    }
  }

  /**
   * Forms error message
   * @param form
   * @param field )
   * @param action
   * @param [isTouched]
   */
  public formErrorMessage(
    form: any,
    field: any,
    action: any,
    isTouched?: boolean
  ) {
    if (
      form &&
      form.controls[field] &&
      (isTouched ||
        form.controls[field].touched ||
        form.controls[field].dirty) &&
      form.controls[field].errors &&
      form.controls[field].errors[action] &&
      (!form.controls[field].errors['required'] || action === 'required')
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * save as excel file
   * @param buffer : any
   * @param fileName : string
   */
  public saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  /**
   * Starts interval counter
   */
  public startInterval() {
    this.subs.sink = interval(1000).subscribe((i) => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
      } else {
        this.stopInterval();
      }
    });
  }

  /**
   * Stops interval counter
   */
  public stopInterval() {
    this.subs.unsubscribe();
  }

  /**
   * on destroy requestes
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public trackByFunction(index: number, item: any) {
    if (item === null || item === undefined) {
      return null;
    }

    return index;
  }
}

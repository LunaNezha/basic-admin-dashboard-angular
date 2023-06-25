import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { languageDetails } from '@core/classes/language.class';
import { Culture } from '@core/enums/cultures.enum';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AppModule } from 'src/app/app.module';
import { SubSink } from 'subsink';
import { LanguageService } from './language.service';
var persianLang = require("../../../assets/translate/fa.json");
var englishLang = require("../../../assets/translate/en.json");

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public subs: SubSink = new SubSink();
  public headerRequest: HttpHeaders = new HttpHeaders();
  public selectedLanguage!: languageDetails;

  /**
   * *===== Services =====
   */
  protected languageService: LanguageService;
  protected httpClient: HttpClient;
  protected toastr: MessageService;
  protected router: Router;
  protected translate: TranslateService;

  constructor() {
    this.translate = AppModule.injector.get(TranslateService);
    this.languageService = AppModule.injector.get(LanguageService);
    this.httpClient = AppModule.injector.get(HttpClient);
    this.toastr = AppModule.injector.get(MessageService);
    this.router = AppModule.injector.get(Router);

    this.languageService.currentLanguage.subscribe(lang => this.selectedLanguage = lang);
    this.headerRequest = this.headerRequest.set('Content-Type', 'application/json');
    this.headerRequest = this.headerRequest.set('Access-Control-Allow-Origin', '*');
    this.headerRequest = this.headerRequest.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    this.headerRequest = this.headerRequest.set('Access-Control-Allow-Methods', 'GET, POST');
  }

  /**
 * language files
 */
  public get languageFiles() {
    if (this.selectedLanguage?.culture == Culture.FA) {
      return persianLang;
    }
    else {
      return englishLang;
    }
  }

  /**
   * on destroy
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

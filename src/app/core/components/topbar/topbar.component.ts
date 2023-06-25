import { Component, OnInit } from '@angular/core';
import { languageDetails } from '@core/classes/language.class';
import { isNullOrUndefinedOrEmpty } from '@core/classes/utility.class';
import { LANGUAGE } from '@core/consts/locale-storage.const';
import { Culture } from '@core/enums/cultures.enum';
import { LanguagesNames } from '@core/enums/languages.enum';
import { MenuItem } from 'primeng/api';
import { BaseComponent } from '@core/components/base.component';
import { AppService } from '@core/service/app.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent extends BaseComponent implements OnInit {

  public items: MenuItem[];
  public isShowTopbar: boolean = true;

  public languages: languageDetails[] = [
    {
      name: LanguagesNames.FARSI,
      image: '../assets/images/IRAN.svg',
      code: 0,
      culture: Culture.FA
    },
    {
      name: LanguagesNames.ENGLISH,
      image: '../assets/images/USA.svg',
      code: 1,
      culture: Culture.EN
    },
  ];

  constructor(public appService: AppService,) {
    super();
    this.subs.sink = this.changeLayoutService.topbarChanged.subscribe((res: any) => this.isShowTopbar = res);
    this.changeLayoutService.showTopbar();
  }

  ngOnInit(): void {
    this.subs.sink = this.languageService.currentLanguage.subscribe(lang => this.currentLang = lang);
  }

  public onConfigButtonClick(event) {
    this.appService.configActive = !this.appService.configActive;
    this.appService.configClick = true;
    event.preventDefault();
  }

  /**
  * change language
  */
  public changeLanguage() {
    let lang = localStorage.getItem(LANGUAGE);

    if (isNullOrUndefinedOrEmpty(lang) == false) {
      if (lang === LanguagesNames.FA) {
        this.translate.use(LanguagesNames.EN);
        localStorage.setItem(LANGUAGE, LanguagesNames.EN);
        this.languageService.changeLanguage(this.languages[1]);
      }
      else {
        this.translate.use(LanguagesNames.FA);
        localStorage.setItem(LANGUAGE, LanguagesNames.FA);
        this.languageService.changeLanguage(this.languages[0]);
      }
    }
    else {
      this.translate.use(LanguagesNames.FA);
      localStorage.setItem(LANGUAGE, LanguagesNames.FA);
      this.languageService.changeLanguage(this.languages[0]);
    }
  }

}

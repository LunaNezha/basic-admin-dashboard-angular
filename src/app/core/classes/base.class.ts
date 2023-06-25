import { SubSink } from 'subsink';
import { AppModule } from "src/app/app.module";
import { languageDetails } from "./language.class";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '@core/service/language.service';
import { Culture } from '@core/enums/cultures.enum';

var persianLang = require("../../../assets/translate/fa.json");
var englishLang = require("../../../assets/translate/en.json");

@Component({
  template: ''
})

export abstract class BaseClass implements OnInit, OnDestroy {

  public subs: SubSink = new SubSink();
  public currentLang!: languageDetails;
  public languageService: LanguageService;

  public constructor() {
    this.languageService = AppModule.injector.get(LanguageService);
    this.subs.sink = this.languageService.currentLanguage.subscribe(result => this.currentLang = result);
  }

  ngOnInit(): void {
      
  }

  /**
   * language files
   */
  public get languageFiles() {
    if (this.currentLang?.culture == Culture.FA) {
      return persianLang;
    }
    else {
      return englishLang;
    }
  }

  /**
   * on destroy requestes
   */
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
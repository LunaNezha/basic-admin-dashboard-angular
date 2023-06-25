import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { languageDetails } from '../classes/language.class';
import { Culture } from '../enums/cultures.enum';
import { LanguagesNames } from '../enums/languages.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language: BehaviorSubject<languageDetails> = new BehaviorSubject(new languageDetails(
    LanguagesNames.FARSI,
    '../../assets/images/IRAN.svg',
    0,
    Culture.FA
  ));
  public currentLanguage = this.language.asObservable();
  public languageChanged: EventEmitter<void> = new EventEmitter();

  constructor() { }

  /**
   * get current language
   */
  public changeLanguage(lang: languageDetails) {
    this.language.next(lang);
    this.languageChanged.emit();
  }

  /**
   * get language chnge emmiter
   */
  public getLanguageChangedEmmited() {
    return this.languageChanged;
  }

}

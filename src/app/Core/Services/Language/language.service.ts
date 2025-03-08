import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en'); // Default language is 'en'
  public languageChanged = this.currentLanguage.asObservable(); // Observable to notify language changes

  constructor(private translate: TranslateService, private http: HttpClient) {
    const savedLang = sessionStorage.getItem('lang') || 'en';
    this.changeLanguage(savedLang); // Load saved language or default
  }

  changeLanguage(lang: string) {
    // Set the translate service to the new language
    this.translate.use(lang);
    sessionStorage.setItem('lang', lang); // Save selected language to sessionStorage
    this.currentLanguage.next(lang); // Notify components of the language change

    // Save the selected language to local storage so it persists between reloads
    sessionStorage.setItem('lang', lang);

    // Notify all components that the language has changed
    this.currentLanguage.next(lang);

    // Change the page direction (ltr or rtl) based on the selected language
    // Change page direction based on the selected language
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
  }


  getLanguage() {
    return this.currentLanguage.asObservable(); // Observable to track language changes
  }

  getEnData() {
    return this.http.get('/assets/i18n/en.json');
  }

  getArData() {
    return this.http.get('/assets/i18n/ar.json');
  }
}


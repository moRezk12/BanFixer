import { Component, Renderer2 } from '@angular/core';
import { LanguageService } from 'src/app/Core/Services/Language/language.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  currentLang: string = 'en';

  constructor(private languageService: LanguageService,
    private renderer: Renderer2,
    private translate: TranslateService ,// إضافة TranslateService
  ) {
    // this.languageService.getLanguage().subscribe((lang) => {
    //   this.currentLang = lang;
    //   this.setLangAttribute(lang);
    //   // this.flag = lang === 'ar';
    // });
  }

  // setLangAttribute(lang: string) {
  //   this.renderer.setAttribute(document.body, 'lang', lang);
  // }

  // // تغيير اللغة
  // changeLanguage(lang: string) {
  //   // استخدام اللغة في ngx-translate
  //   this.translate.use(lang);
  //   console.log(lang);

  //   // تحديث اللغة في LanguageService
  //   this.languageService.changeLanguage(lang);

  //   // تعيين الاتجاه بناءً على اللغة المختارة
  //   const direction = lang === 'ar' ? 'rtl' : 'ltr';
  //   document.documentElement.setAttribute('dir', direction);
  //   document.documentElement.setAttribute('lang', lang);
  // }

}

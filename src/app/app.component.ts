import { Component } from '@angular/core';
import english from './locales/en.json'
import arabic from './locales/ar.json'
import {TranslateService} from '@ngx-translate/core';
const locales: any = {
  'en': english,
  'ar': arabic,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'h2h-fe';
  constructor(private translate: TranslateService) {
    Object.keys(locales).forEach(locale => {
      translate.setTranslation(locale, locales[locale])
    })
    translate.setDefaultLang('en')
  }
}

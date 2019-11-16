import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateCacheService } from 'ngx-translate-cache';
import { environment } from '../environments/environment';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cli';
  locale: string;

  constructor(@Inject(TranslateService) private translateService: TranslateService,
              @Inject(TranslateCacheService) private translateCacheService: TranslateCacheService) {

    this.locale = this.translateCacheService.getCachedLanguage() || environment.defaultLanguage;
    this.translateService.use(environment.defaultLanguage);

    // Configure translation for app
    registerLocaleData(localeEn, 'en');

    translateService.setDefaultLang(environment.defaultLanguage);
    translateCacheService.init();
  }

  changeLocale() {
    this.translateService.use(this.locale);
  }

}

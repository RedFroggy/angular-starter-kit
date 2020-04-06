import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { NgJhipsterModule, translatePartialLoader } from 'ng-jhipster';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateCacheModule, TranslateCacheService, TranslateCacheSettings } from 'ngx-translate-cache';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    NgJhipsterModule.forRoot({
      i18nEnabled: true,
      defaultI18nLang: 'en',
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translatePartialLoader,
        deps: [HttpClient],
      },
    }),
    // Will store the current lang in storage (session or local)
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: (translateService, translateCacheSettings) => {
          return new TranslateCacheService(translateService, translateCacheSettings);
        },
        deps: [TranslateService, TranslateCacheSettings],
      },
      cacheName: 'RDF_APP_LANG',
    }),
  ],
  exports: [NgJhipsterModule, TranslateModule],
})
export class AppConfigModule {}

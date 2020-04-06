import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { NgJhipsterModule, translatePartialLoader } from 'ng-jhipster';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

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
  ],
  exports: [NgJhipsterModule, TranslateModule],
})
export class AppConfigModule {}

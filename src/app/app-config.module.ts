import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { createReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export function translatePartialLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'i18n/', `.json?buildTimestamp=${process.env.BUILD_TIMESTAMP}`);
}

const reducer = createReducer({});

@NgModule({
  imports: [
    StoreModule.forRoot(reducer, {}),
    EffectsModule.forRoot([]),
    SharedModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translatePartialLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class AppConfigModule {}

import { ErrorHandler, Injectable } from '@angular/core';

import * as Sentry from '@sentry/browser';
import { environment } from '../../../environments/environment';

Sentry.init({
  dsn: environment.sentryUrl
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log('handle error', error);
    Sentry.captureException(error.originalError || error);
  }
}

import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';

@NgModule({})
export class CoreModule {
  /**
   * Declare only services that need to be singleton
   * Only one instance of these services will be shared among lazy loaded modules
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
    };
  }
}

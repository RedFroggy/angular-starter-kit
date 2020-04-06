import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import 'core-js/es/reflect';
import { AppConfigModule } from './app-config.module';
import { SharedLibsModule } from './shared/shared-libs.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    imports: [AppConfigModule, SharedLibsModule, RouterTestingModule],
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'angular-cli'`, () => {
    expect(component.title).toEqual('angular-cli');
  });

  it('should render title in a h1 tag', () => {
    expect(spectator.query('h1').textContent).toContain('app.title');
  });
});

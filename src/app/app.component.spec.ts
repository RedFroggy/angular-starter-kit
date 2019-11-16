import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    imports: [RouterTestingModule],
    component: AppComponent
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
    expect(spectator.query('h1').textContent).toContain('Welcome to angular-cli!');
  });
});

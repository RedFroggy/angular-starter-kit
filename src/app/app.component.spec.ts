import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import 'core-js/es/reflect';
import { SharedLibsModule } from './shared/shared-libs.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { PetFixture } from '../test/fixtures/pet.fixture';

const BASE_PATH = 'https://petstore3.swagger.io/api/v3';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  let httpTestingController: HttpTestingController;

  const createComponent = createComponentFactory({
    imports: [TranslateModule.forRoot(), SharedLibsModule, RouterTestingModule, HttpClientTestingModule],
    component: AppComponent,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should create the app', () => {
    expect(component).toBeDefined();

    const petsReq = httpTestingController.expectOne(`${BASE_PATH}/pet/findByStatus?status=available`);
    expect(petsReq.request.method).toBe('GET');
    petsReq.flush(PetFixture.aListOfPets());
  });

  it(`should have as title 'angular-cli'`, () => {
    expect(component.title).toEqual('angular-starter-kit');
    httpTestingController.expectOne(`${BASE_PATH}/pet/findByStatus?status=available`);
  });

  it('should change locale', () => {
    httpTestingController.expectOne(`${BASE_PATH}/pet/findByStatus?status=available`);

    const translateService: TranslateService = TestBed.inject(TranslateService);
    jest.spyOn(translateService, 'use').mockReturnValue(of(null));

    component.changeLocale();
    expect(translateService.use).toHaveBeenCalled();
  });
});

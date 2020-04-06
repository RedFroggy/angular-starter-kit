import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'; import {
ModuleWithProviders } from '@angular/compiler/src/core'; import {
SharedLibsModule } from './shared-libs.module'; @NgModule({ imports:
[SharedLibsModule], exports: [SharedLibsModule], schemas:
[CUSTOM_ELEMENTS_SCHEMA] }) /** * This module is used to import and configure
common modules for all project */ export class SharedModule { /** * Declare only
services that needs to be singleton * Only one instance of these services will
be shared among lazy loaded modules */ static forRoot(): ModuleWithProviders {
return { ngModule: SharedModule }; } }

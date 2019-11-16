import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
/**
 * This module is used to import dans configure vendors libraries
 */
export class SharedLibsModule {
}

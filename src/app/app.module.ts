import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppConfigModule } from './app-config.module';
import { FormsModule } from '@angular/forms';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppConfigModule, AppRoutingModule, ApiModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

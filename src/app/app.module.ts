import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppConfigModule } from './app-config.module';
import { FormsModule } from '@angular/forms';
import { ApiModule } from 'app/shared/api';
import { LoginModule } from 'app/features/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, AppConfigModule, AppRoutingModule, ApiModule, LoginModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

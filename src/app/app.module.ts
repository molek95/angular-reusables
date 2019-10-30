import { LoadingIndicatorModule } from 'loading-indicator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

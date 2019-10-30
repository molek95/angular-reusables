import { LoadingIndicatorModule } from 'loading-indicator';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LOADING_INDICATOR_CONFIG } from 'projects/loading-indicator/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingIndicatorModule.forRoot()
  ],
  providers: [{provide: LOADING_INDICATOR_CONFIG, useValue: {color: 'blue', size: 80}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

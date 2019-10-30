import { LOADING_INDICATOR_CONFIG, DEFAULT_CONFIG } from './loading-indicator.config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingIndicatorComponent,
    SpinnerComponent,
  ],
  exports: [
    LoadingIndicatorComponent
  ]
})
export class LoadingIndicatorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingIndicatorModule,
      providers: [{provide: LOADING_INDICATOR_CONFIG, useValue: DEFAULT_CONFIG}]
    };
  }
}

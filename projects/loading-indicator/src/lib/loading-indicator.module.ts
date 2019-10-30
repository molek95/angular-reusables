import { NgModule } from '@angular/core';
import { LoadingIndicatorComponent } from './loading-indicator.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingIndicatorComponent],
  exports: [LoadingIndicatorComponent]
})
export class LoadingIndicatorModule { }

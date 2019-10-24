import { isLoading$ } from './loading-indicator.decorators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-loading-indicator',
  // template: `
  //   <p *ngIf="isLoading$ | async">
  //     loading-indicator works!
  //   </p>
  // `,
  template: `<p>loading indicator works</p>`,
  styles: []
})
export class LoadingIndicatorComponent {

  constructor() { }

  get isLoading$(): Observable<boolean> {
    return isLoading$;
  }

}

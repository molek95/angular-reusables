import { isLoading$ } from '../loading-indicator.decorators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent {

  constructor() { }

  get isLoading$(): Observable<boolean> {
    return isLoading$;
  }

}

import { LoadingIndicatorConfig } from './../interfaces/loading-indicator.interfaces';
import { Inject, Component, ViewChild } from "@angular/core";
import { LOADING_INDICATOR_CONFIG } from "../loading-indicator.config";

@Component({
    selector: 'lib-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent {
    constructor(@Inject(LOADING_INDICATOR_CONFIG) private config: LoadingIndicatorConfig) {}

    get color(): string {
        return `${this.config.color}`;
    }
}

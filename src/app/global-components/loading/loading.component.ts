import {Component} from '@angular/core';
import {LoadingStore} from './loading.store'

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
    constructor(private store: LoadingStore) {}
}

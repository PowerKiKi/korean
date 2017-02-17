import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'Korean';
    public data;
    public term = '';

    constructor(dataService: DataService) {
        this.data = dataService.data;
    }

    public ruleCount(groups) {

        let ruleCount = 0;
        for (const group of groups) {
            ruleCount += group.rules.length;
        }

        return ruleCount + ' rules in ' + groups.length + ' groups';
    }
}

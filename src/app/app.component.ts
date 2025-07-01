import {Component, inject, ChangeDetectionStrategy} from '@angular/core';
import {DataService, type Group} from './data.service';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';

@Component({
    selector: 'app-root',
    imports: [FormsModule, SearchPipe],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public readonly data = inject(DataService).data;
    public term = '';

    public ruleCount(groups: Group[]): string {
        let ruleCount = 0;
        for (const group of groups) {
            ruleCount += group.rules.length;
        }

        return ruleCount.toFixed() + ' rules in ' + groups.length.toFixed() + ' groups';
    }
}

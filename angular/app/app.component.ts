import {Component} from 'angular2/core'
import {Location} from 'angular2/router'
import {AppData} from './app.data'
import {SearchPipe} from './search.pipe'
import {Router, RouteConfig, RouteParams} from 'angular2/router';

@Component({
    selector: 'my-app',
    pipes: [SearchPipe],
    template: `<h1>Korean</h1>
    <div class="searchBox">
        <input [(ngModel)]="term" placeholder="search" autofocus />
        <span class="count">{{ruleCount(data | search: term)}}</span>
    </div>
    <section class="group" *ngFor="#group of data | search: term">
        <h1>{{group.title}}</h1>
        <section class="rule" *ngFor="#rule of group.rules">
            <h1>{{rule.title}}</h1>
            <div [innerHTML]="rule.content"></div>
            <div class="tags" *ngFor="#tag of rule.tags">
                <span class="tag">{{tag}}</span>
            </div>
        </section>
    </section>
    `
})
// @RouteConfig([
//   {path:'/', name: 'CrisisCenter', component: AppComponent},
// ])

export class AppComponent {
    public data ;
    public search: string;

    constructor(/*routeParams: RouteParams*/) {
        let d = new AppData();
        this.data = d.data;
    }

    public ruleCount(groups) {

        let groupCount = groups.length;
        let ruleCount = 0;
        for (let group of groups) {
            ruleCount += group.rules.length;
        }

        return ruleCount + ' rules in ' + groupCount + ' groups';
    }
}

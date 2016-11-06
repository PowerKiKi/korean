import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Korean';
  public data;
  public term: string = '';

  constructor(dataService: DataService) {
    this.data = dataService.data;
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

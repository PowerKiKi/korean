import { Component } from '@angular/core';
import {Search} from './search.pipe';
import {DataService} from './data.service';

@Component({
  moduleId: module.id,
  selector: 'korean-app',
  templateUrl: 'korean.component.html',
  styleUrls: ['korean.component.css'],
  pipes: [Search],
})
export class KoreanAppComponent {
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

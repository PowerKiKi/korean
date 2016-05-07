import {Pipe, PipeTransform} from 'angular2/core'
import {AppData} from './app.data'

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    private getRegExps(terms  : string): string[] {
        let splitTerms;
        if (!terms) {
            splitTerms = [];
        } else {
            splitTerms = terms.trim().split(/ +/);
        }

        let result = [];
        for (let term of splitTerms) {
            result.push(new RegExp(term, 'i'));
        }

        return result;
    }

    private matchRule(terms: string[], o) {

        let match = true;
        for (let term of terms) {
            let termMatch = o.title.match(term);
            if (o.content) {
                termMatch = termMatch || o.content.match(term);
            }

            match = match && termMatch;
        }

        return match;
    }

    transform(groups, args: string[]): any {
        let terms = this.getRegExps(args[0]);

        if (!terms.length) {
            return groups;
        }

        let result = [];
        for (let group of groups) {
            let groupCopy = {
                title: group.title,
                rules: []
            };

            if (this.matchRule(terms, group)) {
                result.push(group);
            } else {
                for (let rule of group.rules) {
                    if (this.matchRule(terms, rule)) {
                        groupCopy.rules.push(rule);
                    }
                }

                if (groupCopy.rules.length) {
                    result.push(groupCopy);
                }
            }
        }

        return result;
    }
}

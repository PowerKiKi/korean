import {Pipe, PipeTransform} from '@angular/core';
import type {Group, Rule} from './data.service';

@Pipe({
    name: 'search',
})
export class SearchPipe implements PipeTransform {
    transform(groups: Group[], rawTerms: string): Group[] {
        const terms = this.getRegExps(rawTerms);

        if (!terms.length) {
            return groups;
        }

        const result = [];
        for (const group of groups) {
            const groupCopy: Group = {
                title: group.title,
                rules: [],
            };

            if (this.matchRule(terms, group)) {
                result.push(group);
            } else {
                for (const rule of group.rules) {
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

    // Escape user input to be treated as a literal string within a regular expression
    private escapeRegExp(value: string): string {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    private getRegExps(terms: string): RegExp[] {
        let splitTerms: string[];
        if (!terms) {
            splitTerms = [];
        } else {
            splitTerms = terms.trim().split(/ +/);
        }

        const result = [];
        for (const term of splitTerms) {
            result.push(new RegExp(this.escapeRegExp(term), 'i'));
        }

        return result;
    }

    private matchRule(terms: RegExp[], o: Group | Rule): boolean {
        let match = true;
        for (const term of terms) {
            let termMatch = !!o.title.match(term);
            if ('content' in o) {
                // eslint-disable-next-line @typescript-eslint/no-base-to-string
                termMatch = termMatch || !!o.content.toString().match(term);
            }

            match = match && termMatch;
        }

        return match;
    }
}

import { inject, TestBed } from '@angular/core/testing';
import { SearchPipe } from './search.pipe';
import { DataService } from '../app/data.service';

describe('Search Pipe', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataService],
        });
    });

    const pipe = new SearchPipe();

    it('should return empty array if not found', inject([DataService], (dataService: DataService) => {
        const actual = pipe.transform(dataService.data, 'nonexistingstring');
        expect(actual.length).toBe(0);
    }));

    it('should find by group title', inject([DataService], (dataService: DataService) => {
        const actual = pipe.transform(dataService.data, 'Basics');
        expect(actual.length).toBe(1);
        expect(actual[0].title).toBe('Basics');
        expect(actual[0].rules.length).toBe(4);
    }));

    it('should find by rule title', inject([DataService], (dataService: DataService) => {
        const actual = pipe.transform(dataService.data, 'definitely');
        expect(actual.length).toBe(1);
        expect(actual[0].title).toBe('Want / Plan to');
        expect(actual[0].rules.length).toBe(1);
        expect(actual[0].rules[0].title).toBe('I definitely will');
    }));

    it('should find by rule content', inject([DataService], (dataService: DataService) => {
        const actual = pipe.transform(dataService.data, '배고파서');
        expect(actual.length).toBe(1);
        expect(actual[0].title).toBe('Imperatives');
        expect(actual[0].rules.length).toBe(1);
        expect(actual[0].rules[0].content).toContain('배고파서');
    }));

    it('should escape regexp patterns', inject([DataService], (dataService: DataService) => {
        const actual = pipe.transform(dataService.data, '+');
        expect(actual.length).toBe(6);
    }));
});

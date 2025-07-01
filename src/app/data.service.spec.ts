import {TestBed} from '@angular/core/testing';
import {DataService} from './data.service';
import {provideZonelessChangeDetection} from '@angular/core';

describe('Service: Data', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideZonelessChangeDetection()],
        });

        service = TestBed.inject(DataService);
    });

    it('should have some data', () => {
        expect(service).toBeTruthy();
        expect(Array.isArray(service.data)).toBeTrue();
    });
});

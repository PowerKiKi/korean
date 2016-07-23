import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { KoreanAppComponent } from '../app/korean.component';
import { DataService } from '../app/data.service';

beforeEachProviders(() => [KoreanAppComponent, DataService]);

describe('App: Korean', () => {
  it('should create the app',
      inject([KoreanAppComponent], (app: KoreanAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Korean\'',
      inject([KoreanAppComponent], (app: KoreanAppComponent) => {
    expect(app.title).toEqual('Korean');
  }));
});

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { KoreanAppComponent, environment } from './app/';
import { DataService } from './app/data.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(KoreanAppComponent, [DataService]);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { SearchPipe } from './search.pipe';

@NgModule({
    declarations: [
        AppComponent,
        SearchPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [DataService],
    bootstrap: [AppComponent],
})
export class AppModule {
}

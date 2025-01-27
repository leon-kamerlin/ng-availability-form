import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvailabilityFormModule } from 'availability-form';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FullScreenWrapperModule } from 'ng-components-leon';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        TranslateModule.forRoot(),
        BrowserModule,
        AvailabilityFormModule,
        BrowserAnimationsModule,
        FullScreenWrapperModule
    ],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'outline'
            }
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

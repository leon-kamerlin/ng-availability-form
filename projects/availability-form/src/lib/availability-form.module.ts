import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityFormComponent } from './availability-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvailabilityFormDetailComponent } from './components/availability-form-detail/availability-form-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { FieldRequiredModule } from 'leon-angular-utils';


@NgModule({
    declarations: [
        AvailabilityFormComponent,
        AvailabilityFormDetailComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatDividerModule,
        TranslateModule,
        FieldRequiredModule,
    ],
    exports: [
        AvailabilityFormComponent,
    ]
})
export class AvailabilityFormModule {
}

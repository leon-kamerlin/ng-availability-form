import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityFormComponent } from './availability-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

describe('AvailabilityFormComponent', () => {
    let component: AvailabilityFormComponent;
    let fixture: ComponentFixture<AvailabilityFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AvailabilityFormComponent
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                TranslateModule.forRoot(),
            ],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AvailabilityFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('fails', () => {
        expect(2).toBeLessThan(2);
    });
});

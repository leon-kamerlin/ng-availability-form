import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { defaultAvailability, timeValidator } from './helper';
import { DataDispatcher, DayAvailability, DispatcherActionTypes, WeekAvailability } from 'leon-angular-utils';

@Component({
    selector: 'lib-availability-form',
    templateUrl: './availability-form.component.html',
    styleUrls: ['./availability-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AvailabilityFormComponent implements OnInit, OnChanges {

    constructor(private fb: FormBuilder) {
        this.form = this.createForm(defaultAvailability);
    }


    get monday(): FormGroup {
        return this.form.get('monday') as FormGroup;
    }

    get tuesday(): FormGroup {
        return this.form.get('tuesday') as FormGroup;
    }

    get wednesday(): FormGroup {
        return this.form.get('wednesday') as FormGroup;
    }

    get thursday(): FormGroup {
        return this.form.get('thursday') as FormGroup;
    }

    get friday(): FormGroup {
        return this.form.get('friday') as FormGroup;
    }

    get saturday(): FormGroup {
        return this.form.get('saturday') as FormGroup;
    }

    get sunday(): FormGroup {
        return this.form.get('sunday') as FormGroup;
    }

    form: FormGroup;

    @Input()
    submitText = 'Submit';

    @Input()
    showPreviousButton = true;

    @Input()
    showSubmitButton = true;

    @Input()
    availability: WeekAvailability;

    @Output()
    submitted: EventEmitter<DataDispatcher<WeekAvailability>> = new EventEmitter();


    private static updateDayAvailability(dayAvailability: DayAvailability, day: FormGroup) {
        const start: FormControl = day.get('start') as FormControl;
        const end: FormControl = day.get('end') as FormControl;
        const available: FormControl = day.get('available') as FormControl;

        start.patchValue(dayAvailability.start);
        end.patchValue(dayAvailability.end);
        available.patchValue(dayAvailability.available);
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        const newData: WeekAvailability = changes?.availability?.currentValue;
        if (newData) {
            this.updateForm(newData);
        }
    }

    updateForm(availability: WeekAvailability) {
        AvailabilityFormComponent.updateDayAvailability(availability.monday, this.monday);
        AvailabilityFormComponent.updateDayAvailability(availability.tuesday, this.tuesday);
        AvailabilityFormComponent.updateDayAvailability(availability.wednesday, this.wednesday);
        AvailabilityFormComponent.updateDayAvailability(availability.thursday, this.thursday);
        AvailabilityFormComponent.updateDayAvailability(availability.friday, this.friday);
        AvailabilityFormComponent.updateDayAvailability(availability.saturday, this.saturday);
        AvailabilityFormComponent.updateDayAvailability(availability.sunday, this.sunday);
    }


    private createDayAvailability(dayAvailability: DayAvailability): FormGroup {
        return this.fb.group({
            start: [dayAvailability.start],
            end: [dayAvailability.end],
            available: [dayAvailability.available]
        }, { validator: timeValidator });
    }


    private createForm(availability: WeekAvailability): FormGroup {
        return this.fb.group({
            monday: this.createDayAvailability(availability.monday),
            tuesday: this.createDayAvailability(availability.tuesday),
            wednesday: this.createDayAvailability(availability.wednesday),
            thursday: this.createDayAvailability(availability.thursday),
            friday: this.createDayAvailability(availability.friday),
            saturday: this.createDayAvailability(availability.saturday),
            sunday: this.createDayAvailability(availability.sunday),
        });
    }

    onSubmit(data: WeekAvailability) {
        if (this.form.valid) {
            const dispatcher: DataDispatcher<WeekAvailability> = {
                data,
                action: this.availability ? DispatcherActionTypes.UPDATE : DispatcherActionTypes.CREATE
            };
            this.submitted.emit(dispatcher);
        }
    }
}

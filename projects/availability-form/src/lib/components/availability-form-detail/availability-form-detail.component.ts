import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { fromFiveToMidnight } from '../../helper';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;


        return !!(control && control.parent.invalid && (control.parent.dirty || control.parent.touched || isSubmitted));
    }
}

@Component({
    selector: 'lib-availability-form-detail',
    templateUrl: './availability-form-detail.component.html',
    styleUrls: ['./availability-form-detail.component.scss']
})
export class AvailabilityFormDetailComponent implements OnInit {
    @Input() day: string;
    @Input() form: FormGroup;
    range = fromFiveToMidnight;
    errorStateMatcher = new MyErrorStateMatcher();

    constructor() {
    }

    ngOnInit() {
    }


    get start(): FormControl {
        return this.form.get('start') as FormControl;
    }

    get end(): FormControl {
        return this.form.get('end') as FormControl;
    }

}

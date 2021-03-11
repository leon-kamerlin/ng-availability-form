import { AbstractControl } from '@angular/forms';
import { DayAvailability } from 'leon-angular-utils';
import { WeekAvailability } from 'leon-angular-utils';
import { SelectorView } from 'leon-angular-utils';



export const dayAvailability: DayAvailability = {
    start: '7:00',
    end: '16:00',
    available: true
};

export const unavailable: DayAvailability = {
    start: null,
    end: null,
    available: false
};


export const defaultAvailability: WeekAvailability = {
    monday: dayAvailability,
    tuesday: dayAvailability,
    wednesday: dayAvailability,
    thursday: dayAvailability,
    friday: dayAvailability,
    saturday: unavailable,
    sunday: unavailable
};


export const timeValidator = (c: AbstractControl) => {
    const start = c.get('start').value;
    const end = c.get('end').value;
    const available = c.get('available').value;
    if (available) {
        const START = Number(start.split(':').join(''));
        const END = Number(end.split(':').join(''));

        if (START >= END) {
            return {
                notValid: true
            };
        }
    }
    return null;
};


export const hours: SelectorView[] = [
  { value: 0, viewValue: '00' },
  { value: 1, viewValue: '01' },
  { value: 2, viewValue: '02' },
  { value: 3, viewValue: '03' },
  { value: 4, viewValue: '04' },
  { value: 5, viewValue: '05' },
  { value: 6, viewValue: '06' },
  { value: 7, viewValue: '07' },
  { value: 8, viewValue: '08' },
  { value: 9, viewValue: '09' },
  { value: 10, viewValue: '10' },
  { value: 11, viewValue: '11' },
  { value: 12, viewValue: '12' },
  { value: 13, viewValue: '13' },
  { value: 14, viewValue: '14' },
  { value: 15, viewValue: '15' },
  { value: 16, viewValue: '16' },
  { value: 17, viewValue: '17' },
  { value: 18, viewValue: '18' },
  { value: 19, viewValue: '19' },
  { value: 20, viewValue: '20' },
  { value: 21, viewValue: '21' },
  { value: 22, viewValue: '22' },
  { value: 23, viewValue: '23' },
];

export const minutes: SelectorView[] = [
  { value: 0, viewValue: '00' },
  { value: 5, viewValue: '05' },
  { value: 10, viewValue: '10' },
  { value: 15, viewValue: '15' },
  { value: 20, viewValue: '20' },
  { value: 25, viewValue: '25' },
  { value: 30, viewValue: '30' },
  { value: 35, viewValue: '35' },
  { value: 40, viewValue: '40' },
  { value: 45, viewValue: '45' },
  { value: 50, viewValue: '50' },
  { value: 55, viewValue: '55' },
];

export const fromFiveToMidnight: SelectorView[] = [
  {
    value: '5:00',
    viewValue: '5:00'
  },
  {
    value: '5:30',
    viewValue: '5:30'
  },
  {
    value: '6:00',
    viewValue: '6:00'
  },
  {
    value: '6:30',
    viewValue: '6:30'
  },
  {
    value: '7:00',
    viewValue: '7:00'
  },
  {
    value: '7:30',
    viewValue: '7:30'
  },
  {
    value: '8:00',
    viewValue: '8:00'
  },
  {
    value: '8:30',
    viewValue: '8:30'
  },
  {
    value: '9:00',
    viewValue: '9:00'
  },
  {
    value: '9:30',
    viewValue: '9:30'
  },
  {
    value: '10:00',
    viewValue: '10:00'
  },
  {
    value: '10:30',
    viewValue: '10:30'
  },
  {
    value: '11:00',
    viewValue: '11:00'
  },
  {
    value: '11:30',
    viewValue: '11:30'
  },
  {
    value: '12:00',
    viewValue: '12:00'
  },
  {
    value: '12:30',
    viewValue: '12:30'
  },
  {
    value: '13:00',
    viewValue: '13:00'
  },
  {
    value: '13:30',
    viewValue: '13:30'
  },
  {
    value: '14:00',
    viewValue: '14:00'
  },
  {
    value: '14:30',
    viewValue: '14:30'
  },
  {
    value: '15:00',
    viewValue: '15:00'
  },
  {
    value: '15:30',
    viewValue: '15:30'
  },
  {
    value: '16:00',
    viewValue: '16:00'
  },
  {
    value: '16:30',
    viewValue: '16:30'
  },
  {
    value: '17:00',
    viewValue: '17:00'
  },
  {
    value: '17:30',
    viewValue: '17:30'
  },
  {
    value: '18:00',
    viewValue: '18:00'
  },
  {
    value: '18:30',
    viewValue: '18:30'
  },
  {
    value: '19:00',
    viewValue: '19:00'
  },
  {
    value: '19:30',
    viewValue: '19:30'
  },
  {
    value: '20:00',
    viewValue: '20:00'
  },
  {
    value: '20:30',
    viewValue: '20:30'
  },
  {
    value: '21:00',
    viewValue: '21:00'
  },
  {
    value: '21:30',
    viewValue: '21:30'
  },
  {
    value: '22:00',
    viewValue: '22:00'
  },
  {
    value: '22:30',
    viewValue: '22:30'
  },
  {
    value: '23:00',
    viewValue: '23:00'
  },
  {
    value: '23:30',
    viewValue: '23:30'
  },
];




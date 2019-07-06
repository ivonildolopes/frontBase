import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter } from '@angular/material';
import { NotificationService } from '../../notification/notification.service';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatepickerCustomComponent),
  multi: true
};

const noop = () => {
};

@Component({
  selector: 'datepicker-custom',
  templateUrl: './datepicker-custom.component.html',
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})
export class DatepickerCustomComponent implements ControlValueAccessor {
  public mask = {
    guide: true,
    showMask: false,
    // keepCharPositions : true,
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
  };

  @Input() maxDate: Date;
  @Input() required: Boolean;
  // @Input() placeholder: string;
  @Input() disabled: Boolean;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private notificationService: NotificationService
  ) {
    this.dateAdapter.setLocale('pt-Br');
  }


  innerValue: Date = new Date();

  //Placeholders for the callbacks which are later provided
  //by the Control Value Accessor
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;


  //get accessor
  get value(): Date {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: Date) {
    if (v !== this.innerValue) {
      this.innerValue = v;
    }
  }
  //Occured value changed from module
  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onChange(event) {
    this.value = event;
    this.onBlur();
  }

  todate(value) {
    const dateParts = value.split('/');
    this.value = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    if (this.maxDate && this.value > new Date()) {
      // this.notificationService.error('Valor da Data Inválido!');
      this.value = null;
    }
  }

  onBlur() {
    this.onChangeCallback(this.innerValue);
  }
}

import { ControlItem } from './../../../models/frontend/control-item/index';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Value } from 'src/app/models/frontend';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadiosComponent),
      multi: true,
    },
  ],
})
export class RadiosComponent implements OnInit, ControlValueAccessor {

  value!: Value;
  isDisabled!: boolean;

  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value>()

  private onChange!: Function;
  private onTouched!: Function;

  constructor() { }
  writeValue(value: Value): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChanged(value: Value) {
    this.value = value;
    this.onChange(value);
    this.changed.emit(value);
  }

  isChecked(value: Value): boolean{
    return this.value === value;
  }

  ngOnInit(): void {
  }

}

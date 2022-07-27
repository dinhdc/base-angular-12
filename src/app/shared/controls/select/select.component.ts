import {
  Component,
  OnInit,
  forwardRef,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {ControlItem, Value} from "../../../models/frontend";
import {$e} from "@angular/compiler/src/chars";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() items!: ControlItem[];
  @Input() placeholder!: string;
  @Output() changed = new EventEmitter<Value>();
  value!: Value;
  isDisabled!: boolean;

  private onChange!: Function;
  private onTouched!: Function;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: Value): void {
    this.value = value;
  }

  onChanged(event: MatSelectChange){
    const value = event.value ? event.value:null;
    console.log(value);
    this.value = value;
    this.onChange(value);
    this.onTouched(value);
    this.changed.emit(value);
  }

  onBlur(){
    this.onTouched();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

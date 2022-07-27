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

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxesComponent),
      multi: true
    }
  ]
})
export class CheckboxesComponent implements OnInit, ControlValueAccessor {
  @Input() items!: ControlItem[];
  @Output() changed = new EventEmitter<Value[]>();
  value!: Value[];
  isDisabled!: boolean;

  private onChange!: Function;
  private onTouched!: Function;

  constructor() { }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: Value[]): void {
    this.value = value;
  }

  onChanged(value: Value, $event: Event){
    const checked = ($event.target as HTMLInputElement).checked;
    const selected = this.getSelected(value, checked);
    this.value = selected;
    this.onChange(selected);
    this.changed.emit(selected)
  }

  private getSelected(value: Value, checked: boolean): Value[]{
    const selected = this.value ? [...this.value] : [];
    if(checked){
      if(!selected.includes(value )){
        selected.push(value)
      }
    }else{
      const index = selected.indexOf(value);
      selected.splice(index, 1);
    }
    return selected.length ? selected : [];
  }

  isChecked(value: Value){
    return this.value && this.value.includes(value)
  }

}

import {
  Component,
  OnInit,
  forwardRef,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

enum PasswordType{
  Password = "password",
  Text = "text"
};

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
    },
  ],
})
export class PasswordComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder: string = '';
  @Input() changed = new EventEmitter<string>();
  passwordType: string = PasswordType.Password;
  types = PasswordType;
  value: string = '';
  isDisable!: boolean;
  private onChange!: Function;
  private onTouch!: Function;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onKeyup($event: Event){
    let value = ($event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouch(value);
    this.changed.emit(value);
  }

  onBlur(){
    this.onTouch();
  }

  togglePassword() {
      this.passwordType = this.passwordType === PasswordType.Password ? PasswordType.Text : PasswordType.Password;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

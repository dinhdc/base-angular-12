import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import {PasswordModule} from "./password/password.module";

@NgModule({
  imports: [CommonModule, InputModule, FormFieldModule, PasswordModule],
  exports: [InputModule, FormFieldModule, PasswordModule],
  declarations: [],
})
export class ControlsModule {}

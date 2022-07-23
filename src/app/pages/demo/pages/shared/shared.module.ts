import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonModule, InputModule, FormFieldModule, PasswordModule } from '../../../../shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    InputModule,
    FormFieldModule,
    PasswordModule
  ],
})
export class SharedModule {}

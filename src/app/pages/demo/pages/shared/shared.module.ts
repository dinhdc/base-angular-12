import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonModule } from '../../../../shared/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import {
  InputModule,
  FormFieldModule,
} from '../../../../shared/controls/index';

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    InputModule,
    FormFieldModule,
  ],
})
export class SharedModule {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Regex, RegexError} from "../../../../shared";
import {ControlItem} from "../../../../models/frontend";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent implements OnInit {
  form!: FormGroup;
  regexError = RegexError;
  inline: boolean = false;
  constructor(private fb: FormBuilder) {}

  items: ControlItem[] = [
    {
      label: 'First', value: 1
    },
    {
      label: 'Second', value: 2
    },
    {
      label: 'Third', value: 3
    },
    {
      label: 'Fourth', value: 4
    },
    {
      label: 'Fifth', value: 5
    },
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(Regex.Email)
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
          ],
        }
      ],
      select: [
        null,
        {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }
      ],
      checkboxes: [
        null,
        {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }
      ],
      radios: [
        null,
        {
          updateOn: 'change',
          validators: [
            Validators.required
          ]
        }
      ]
    });
  }

  onPatchValue() {
    this.form.patchValue({ input: 'test' });
  }

  onSubmit(): void {
    console.log('submitted');
  }

  onToggleInline() {
    this.inline = !this.inline;
  }
}

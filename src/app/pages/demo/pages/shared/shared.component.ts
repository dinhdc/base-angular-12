import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Regex, RegexError} from "../../../../shared";

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

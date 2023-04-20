import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form:any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      education: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  submit() {
    this.dialogRef.close(this.form.value);
  }

}

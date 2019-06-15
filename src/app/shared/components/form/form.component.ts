import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatSnackBar} from "@angular/material";
import {Experience} from "../../models/experience";
import {ExperienceService} from "../../services/experience.service";

@Component({
  selector: 'kiel-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form: FormGroup;
  encodedImage = "";

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data,
              private snackBar: MatSnackBar,
              private cruiseService: ExperienceService) { }

  ngOnInit() {
    this.createForm();
  }

  getImage(encodedImage) {
    this.encodedImage = encodedImage;
  }


  createForm() {
    this.form = this.fb.group({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    })
  }

  submitForm() {

    const cruise: Experience = {
      name: this.form.controls["name"].value,
      description: this.form.controls["description"].value,
      encodedImage: this.encodedImage
    };

    if(this.form.valid) {
      if(this.data.name === "Experience") {
        this.cruiseService.addExperience("cruise" ,cruise).subscribe(res => {
          this.snackBar.open(res.message, res.code, {
            duration: 5000
          })
        }, () => {
          this.snackBar.open("There exists a problem while connecting to the server", "500", {
            duration: 5000
          });
        });
      }
    }
  }
}

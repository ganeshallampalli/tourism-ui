import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatSnackBar} from "@angular/material";
import {Experience} from "../../models/experience";
import {ExperienceService} from "../../services/experience.service";

@Component({
  selector: 'kiel-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  form: FormGroup;
  encodedImage = "";

  constructor(private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data,
              private snackBar: MatSnackBar,
              private experienceService: ExperienceService) {
  }

  ngOnInit() {
    this.createForm();
  }

  getImage(encodedImage) {
    this.encodedImage = encodedImage;
  }


  createForm() {
    this.form = this.fb.group({
      name: new FormControl(this.data.experience.name, [Validators.required]),
      description: new FormControl(this.data.experience.description, [Validators.required]),
      cost: new FormControl(this.data.experience.cost, []),
      avgTimeSpent: new FormControl(this.data.experience.avgTimeSpent, [])
    })
  }

  submitForm() {

    const experience: Experience = {
      id: this.data.experience.id,
      name: this.form.controls["name"].value,
      description: this.form.controls["description"].value,
      encodedImage: this.encodedImage
    };

    if (this.form.valid) {
      if (this.data.name === "Cuisine") {
        experience.cost = this.form.controls["cost"].value
      }

      if (this.data.name === "Things to do") {
        experience.cost = this.form.controls["avgTimeSpent"].value
      }

      this.experienceService.addExperience(this.data.name.toLowerCase(), experience).subscribe(res => {
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

import { Component, OnInit } from '@angular/core';
import {Experience} from "../../models/experience";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ExperienceService} from "../../services/experience.service";
import {FormComponent} from "../form/form.component";

@Component({
  selector: 'kiel-things-todo',
  templateUrl: './things-todo.component.html',
  styleUrls: ['./things-todo.component.scss']
})
export class ThingsTodoComponent implements OnInit {

  thingsToDoList: Experience[] = [];

  constructor(private dialog: MatDialog,
              private cuisineService: ExperienceService,
              private snackBar: MatSnackBar) {
  }

  openForm(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {name: "ThingsToDo"},
      width: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.cuisineService.getExperiences("thingsToDo").subscribe(response => {

      if (response.code === "200") {
        this.thingsToDoList = response.thingsToDo;
        this.closeForm();
      }
    }, () => {
      this.snackBar.open("There exists a problem while connecting to the server. Sorry for the inconvenience", "500", {
        duration: 5000
      });
    });
  }

  closeForm() {
    this.dialog.closeAll();
  }

  get isAdmin() {
    return localStorage.getItem("role") === "ADMIN";
  }
}

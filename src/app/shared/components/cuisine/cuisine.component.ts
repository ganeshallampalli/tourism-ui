import {Component, OnInit} from '@angular/core';
import {FormComponent} from "../form/form.component";
import {MatDialog, MatSnackBar} from "@angular/material";
import {ExperienceService} from "../../services/experience.service";
import {Experience} from "../../models/experience";

@Component({
    selector: 'kiel-cuisine',
    templateUrl: './cuisine.component.html',
    styleUrls: ['./cuisine.component.scss']
})
export class CuisineComponent implements OnInit {

    cuisineList: Experience[] = [];

    constructor(private dialog: MatDialog,
                private cuisineService: ExperienceService,
                private snackBar: MatSnackBar) {
    }

    openForm(): void {
        const dialogRef = this.dialog.open(FormComponent, {
            data: {name: "Cuisine"},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
        this.cuisineService.getExperiences("cuisine").subscribe(response => {

            if (response.code === "200") {
                this.cuisineList = response.cuisines;
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

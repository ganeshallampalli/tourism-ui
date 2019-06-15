import {Component, OnInit} from '@angular/core';
import {MatDialog, MatSnackBar} from "@angular/material";
import {FormComponent} from "../form/form.component";
import {Experience} from "../../models/experience";
import {ExperienceService} from "../../services/experience.service";

@Component({
    selector: 'kiel-cruise',
    templateUrl: './cruise.component.html',
    styleUrls: ['./cruise.component.scss']
})
export class CruiseComponent implements OnInit {

    constructor(private dialog: MatDialog,
                private cruiseService: ExperienceService,
                private snackBar: MatSnackBar) {
    }

    cruiseList: Experience[] = [
        {
            name: "Dog Breed",
            description: "   The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n" +
                "                            Japan.\n" +
                "                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n" +
                "                            originally\n" +
                "                            bred for hunting."
        },
        {
            name: "Dog Breed",
            description: "   The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n" +
                "                            Japan.\n" +
                "                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n" +
                "                            originally\n" +
                "                            bred for hunting."
        },
        {
            name: "Dog Breed",
            description: "   The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n" +
                "                            Japan.\n" +
                "                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n" +
                "                            originally\n" +
                "                            bred for hunting."
        }, {
            name: "Dog Breed",
            description: "   The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n" +
                "                            Japan.\n" +
                "                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n" +
                "                            originally\n" +
                "                            bred for hunting."
        },
        {
            name: "Dog Breed",
            description: "   The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n" +
                "                            Japan.\n" +
                "                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n" +
                "                            originally\n" +
                "                            bred for hunting."
        }, {
            name: "Dog Breed",
            description: "   The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n" +
                "                            Japan.\n" +
                "                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n" +
                "                            originally\n" +
                "                            bred for hunting."
        }, {
            name: "Dog Breed",
            description: "   The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n" +
                "                            Japan.\n" +
                "                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was\n" +
                "                            originally\n" +
                "                            bred for hunting."
        },


    ]

    openForm(): void {
        const dialogRef = this.dialog.open(FormComponent, {
            data: {name: "Experience"},
            width: "500px"
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit() {
        this.cruiseService.getExperiences("cruise").subscribe(response => {

            if (response.code === "200") {
                this.cruiseList = response.cruises;
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
}

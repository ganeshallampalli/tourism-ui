import {Component} from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginComponent} from "./shared/components/login/login.component";

@Component({
    selector: 'kiel-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'tourism-ui';

    constructor(private dialog: MatDialog) {
    }

    openLoginForm(): void {
        const dialogRef = this.dialog.open(LoginComponent, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}

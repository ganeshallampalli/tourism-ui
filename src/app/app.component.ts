import {Component} from '@angular/core';
import {MatDialog} from "@angular/material";
import {LoginComponent} from "./shared/components/login/login.component";
import {FeedBackComponent} from "./shared/components/feed-back/feed-back.component";

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
        const dialogRef = this.dialog.open(LoginComponent, {});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    openFeedBackForm(): void {
        this.dialog.open(FeedBackComponent, {
            width: "500px"
        });
    }
}

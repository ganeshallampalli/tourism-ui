import {Component} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {FeedBackComponent} from "../feed-back/feed-back.component";


interface ROUTE {
    icon?: string;
    route?: string;
    title?: string;
}

@Component({
    selector: 'kiel-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    experienceRoutes: ROUTE[] = [
        {
            icon: 'directions_boat',
            title: 'Experience Cruise',
            route: 'cruise'
        },
        {
            icon: 'local_dining',
            title: 'Experience Dining',
            route: 'cruise'
        },
        {
            icon: 'near_me',
            title: 'Experience Others',
            route: 'cruise'
        }
    ];

    adminRoutes: ROUTE[] = [
        {
            icon: 'verified_users',
            title: 'Users',
            route: 'cruise'
        },
        {
            icon: 'feedback',
            title: 'Feedbacks',
            route: 'cruise'
        }
    ];

    constructor(private dialog: MatDialog, private router: Router) {
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

    exitRoute() {
        this.router.navigate(['/'])
    }
}


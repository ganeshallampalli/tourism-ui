import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {MaterialModule} from "./material.module";
import {LoginModule} from "./shared/components/login/login.module";
import {HttpClientModule} from "@angular/common/http";
import {FeedBackModule} from "./shared/components/feed-back/feed-back.module";
import {RouterModule} from "@angular/router";
import {CruiseModule} from "./shared/components/cruise/cruise.module";
import {NavComponent} from "./shared/components/nav/nav.component";
import {NavigationBarComponent} from "./shared/components/navigation-bar/navigation-bar.component";
import {CruiseComponent} from "./shared/components/cruise/cruise.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        NavigationBarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        LoginModule,
        FeedBackModule,
        CruiseModule,
        RouterModule.forRoot([
            {
                path: "cruise", component: CruiseComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

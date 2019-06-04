import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {MaterialModule} from "./material.module";
import {LoginModule} from "./shared/components/login/login.module";
import {HttpClientModule} from "@angular/common/http";
import {FeedBackModule} from "./shared/components/feed-back/feed-back.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        LoginModule,
        FeedBackModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

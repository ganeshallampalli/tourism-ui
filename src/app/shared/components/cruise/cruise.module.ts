import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CruiseComponent} from "./cruise.component";
import {MaterialModule} from "../../../material.module";
import {FormModule} from "../form/form.module";

@NgModule({
    declarations: [CruiseComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FormModule,
    ]
})
export class CruiseModule {
}

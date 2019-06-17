import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsTodoComponent } from './things-todo.component';
import {FormModule} from "../form/form.module";
import {MaterialModule} from "../../../material.module";

@NgModule({
  declarations: [ThingsTodoComponent],
  imports: [
    CommonModule,
    FormModule,
    MaterialModule
  ]
})
export class ThingsTodoModule { }

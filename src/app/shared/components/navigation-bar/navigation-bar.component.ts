import { Component, EventEmitter, Output } from '@angular/core';
import {FeedBackComponent} from "../feed-back/feed-back.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'kiel-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}



}

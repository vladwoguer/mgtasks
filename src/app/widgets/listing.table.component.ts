import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ListingTableComponent} from 'angularm';


@Component({
  selector: 'div [mgListingTable]',
  template: `<div *ngIf="entityType">
    <h1>Listing {{ entityType.plural | titleCase }}</h1>
    <ul class="w3-ul w3-hoverable">
    
        <div *ngFor="let entity of entities" [mgEntity]="'table_line'" [entity]="entity">
        </div>
      
   </ul>
    <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>
  </div>`
})
export class CustomListingTableComponent extends ListingTableComponent {

 
}

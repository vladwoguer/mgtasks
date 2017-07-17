
import {ListingTableComponent} from 'angularm';
import {Component} from '@angular/core';

@Component({
  selector: 'div [mgListingTable]',
  template: `<div *ngIf="entityType">
    <h1>Listing {{ entityType.plural | titleCase }}</h1>
    <table>
      <thead>
        <tr>
          <th class="w3-center" *ngFor="let propertyType of entityType.propertyTypes">{{propertyType.name | titleCase}}</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tbody>
        <div *ngFor="let entity of entities" [mgEntity]="'table_line'" [entity]="entity">
        </div>
      </tbody>
    </table>
    <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>
  </div>`
})
export class CustomizedListingTableComponent extends ListingTableComponent  {

  
}

import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularmService, EntityTypeComponent, FlashMessageService, Entity, TitleCase } from 'angularm';

@Component({
  selector: 'div [mgListingTable]',
  template: `<div *ngIf="entityType">

  <div class="w3-bar w3-large w3-theme-d4">
  <a href="#" class="w3-bar-item w3-button">
    <i class="fa fa-bars"></i></a>  
  <span class="w3-bar-item">Listing {{ entityType.plural | titleCase }}</span> 
  <a href="#" class="w3-bar-item w3-button w3-right">
    <i class="fa fa-search"></i></a>
</div>

    <div class="w3-container w3-content">
  <div class="w3-panel w3-white w3-card-2 w3-display-container">
    <p [mgForeachEntity]="'table_line'" [entityType]="entityType"></p>

  </div>
</div>
  
 
       
  
    <a href="#" (click)="create()">New {{entityType.singular | titleCase}}</a>
    <a href="#" (click)="back()">Back</a>`

})
export class StyledListingTableComponent extends EntityTypeComponent implements OnInit {

  constructor(
    private router: Router,
    private flash: FlashMessageService,
    private angularm: AngularmService
  ) {
    super();
  }

  ngOnInit() {
    this.angularm.listAll(this.entityType.singular).then(
      entities => this.entities = entities
    );
  }

  back() {
    this.flash.clearMessage();
    this.router.navigate(['/']);
    return false;
  }

  create() {
    this.flash.clearMessage();
    this.router.navigate([this.entityType.plural, 'new']);
    return false;
  }
}
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MetaModule, PipesModule } from 'angularm';
import { AngularmModule, FlashMessageComponent, FlashMessageService } from 'angularm';
import {
  ListEntitiesComponent, ShowEntityComponent, NewEntityComponent,
  EditEntityComponent, HomeComponent, PageNotFoundComponent } from 'angularm';
import { EntityLineComponent, CreateEntityComponent, FormLineComponent,
  EditEntityFormComponent, EditFormLineComponent, EntityDetailsComponent, 
  ShowLineComponent, ListingTableComponent } from 'angularm';

import { AppComponent } from './app.component';
import { TableHeaderComponent } from "./widgets/table.header";
import {CustomizedTableHeaderComponent} from "./widgets/customized.table.header";
import { TableCellComponent } from "./widgets/table.cell";
import { CustomizedTableCellComponent } from "./widgets/customized.table.cell";
import { CellEntityLineComponent } from "./widgets/cell.entity.line";
import { CssListTableComponent } from "./widgets/css.list.table";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: ListEntitiesComponent },
  { path: ':entitytypename/new', component: NewEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CssListTableComponent,
    TableHeaderComponent,
    CellEntityLineComponent,
    TableCellComponent,
    CustomizedTableCellComponent,
    CustomizedTableHeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularmModule,
    PipesModule,
    MetaModule
  ],
  providers: [
    FlashMessageService
  ],
  entryComponents: [
    EntityLineComponent,
    CreateEntityComponent,
    FormLineComponent,
    EditEntityFormComponent,
    EditFormLineComponent,
    EntityDetailsComponent, 
    ShowLineComponent,
    ListingTableComponent,
    CssListTableComponent,
    TableHeaderComponent,
    CellEntityLineComponent,
    TableCellComponent,
    CustomizedTableCellComponent,
    CustomizedTableHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
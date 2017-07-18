import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertyComponent } from 'angularm';

@Component({
    selector: 'td [mgTableCell]',
    template:
        `<div class="w3-center">{{property.value}}</div>`,
})
export class CustomizedTableCellComponent extends PropertyComponent { }

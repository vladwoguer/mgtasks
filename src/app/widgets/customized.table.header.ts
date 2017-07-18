import { Component } from '@angular/core';

import { PropertyTypeComponent } from 'angularm';

@Component({
    selector: 'th [mgTableHeader]',
    template:
        `<div class="w3-center">{{propertyType.name | titleCase}}</div>`,
})
export class CustomizedTableHeaderComponent extends PropertyTypeComponent { }

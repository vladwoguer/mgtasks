import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EntityLineComponent } from 'angularm';

@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<li class="w3-border">
        
          
          <p *ngFor="let property of entity.mountProperties()"> <span class="w3-tag w3-blue">{{property.value}}</span> </p>
        </li>
         `,
})
export class CustomEntityLineComponent extends EntityLineComponent {

   
}

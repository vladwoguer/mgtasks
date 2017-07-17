import {EntityLineComponent} from 'angularm';
import {Component} from '@angular/core';


@Component({
    selector: 'tr [mgEntityLine]',
    template:
        `<td class="w3-center" *ngFor="let property of entity.mountProperties()">{{property.value}}</td>
         <td> <a href="#" (click)="show()">Show</a></td>
         <td> <a href="#" (click)="edit()">Edit</a></td>
         <td> <a href="#" (click)="destroy()">Destroy</a></td>`,
})
export class CustomizedEntityLineComponent extends EntityLineComponent {


}

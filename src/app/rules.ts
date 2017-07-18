import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import {CustomListingTableComponent} from './widgets/listing.table.component';
import {CustomFormLineComponent} from './widgets/formline';
import {CustomEntityLineComponent} from './widgets/entityline';

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .etr('list_entities','testcase', CustomListingTableComponent)
         .etr('list_entities','quiz', CustomListingTableComponent)
          .etr('list_entities','course', CustomListingTableComponent)
       
        .der('table_line', EntityLineComponent)
        .er('table_line','testcase' ,CustomEntityLineComponent)
        .er('table_line', 'quiz' ,CustomEntityLineComponent)
        .er('table_line', 'course',CustomEntityLineComponent)
        
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};

import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';


  import {CustomizedListingTableComponent} from './widgets/customized.listing.table.component';
  import {CustomizedEntityLineComponent} from './widgets/customized.table.line'

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', ListingTableComponent)
        .etr('list_entities','bug', CustomizedListingTableComponent)
        .etr('list_entities','issue', CustomizedListingTableComponent)
        .etr('list_entities','product', CustomizedListingTableComponent)
        .etr('list_entities','project', CustomizedListingTableComponent)
        .der('table_line', EntityLineComponent)
        .er('table_line','bug', CustomizedEntityLineComponent)
        .er('table_line','issue', CustomizedEntityLineComponent)
        .er('table_line','product', CustomizedEntityLineComponent)
        .er('table_line','project', CustomizedEntityLineComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};

import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { TableHeaderComponent } from "./widgets/table.header";
import { TableCellComponent } from "./widgets/table.cell";
import { CellEntityLineComponent } from "./widgets/cell.entity.line";
import { CssListTableComponent } from "./widgets/css.list.table";
import { CustomizedTableCellComponent } from "./widgets/customized.table.cell";
import {CustomizedTableHeaderComponent} from "./widgets/customized.table.header";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', CssListTableComponent)
        .dptr('table_header', TableHeaderComponent)
        .ptr('table_header','*', '*','integer', CustomizedTableHeaderComponent)
        .ptr('table_header','*', '*','date', CustomizedTableHeaderComponent)
        .der('table_line', CellEntityLineComponent)
        .dpr('table_cell', TableCellComponent)
        .pr('table_cell','*','*','integer',CustomizedTableCellComponent)
        .pr('table_cell','*','*','date',CustomizedTableCellComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};

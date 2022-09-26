import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './views/staff.component';
import { CharactersTableModule } from '../../components/characters-table/characters-table.module';



@NgModule({
  declarations: [
    StaffComponent
    
  ],
  imports: [
    CommonModule,
    CharactersTableModule,
  ]
})
export class StaffModule { }

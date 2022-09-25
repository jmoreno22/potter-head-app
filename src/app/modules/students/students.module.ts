import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './views/students.component';
import { CharactersTableModule } from '../../components/characters-table/characters-table.module';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    CharactersTableModule
  ]
})
export class StudentsModule { }

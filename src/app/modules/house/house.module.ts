import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './views/house.component';
import { CharactersTableModule } from '../../components/characters-table/characters-table.module';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HouseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CharactersTableModule,
    MatCheckboxModule,
    MatRadioModule,
  ]
})
export class HouseModule { }

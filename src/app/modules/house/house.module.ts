import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HouseComponent } from './views/house.component';
import { CharactersTableModule } from '../../components/characters-table/characters-table.module';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';



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
    MatButtonModule,
  ]
})
export class HouseModule { }

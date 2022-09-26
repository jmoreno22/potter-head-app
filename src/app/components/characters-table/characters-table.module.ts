import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharactersTableComponent } from './characters-table.component';

import { CalculateAgePipe } from '../pipes/calculate-age.pipe';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CharactersTableComponent,
    CalculateAgePipe
  ],
  exports: [CharactersTableComponent, CalculateAgePipe],
  imports: [
    CommonModule,
    RouterModule,

    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule
    
  ]
})
export class CharactersTableModule { }

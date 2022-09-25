import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersTableComponent } from './characters-table.component';


import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { CalculateAgePipe } from '../pipes/calculate-age.pipe';


@NgModule({
  declarations: [
    CharactersTableComponent,
    CalculateAgePipe
  ],
  exports: [CharactersTableComponent, CalculateAgePipe],
  imports: [
    CommonModule,
    
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule
    
  ]
})
export class CharactersTableModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }

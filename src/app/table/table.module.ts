import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatFormFieldModule, MatOptionModule, MatSelectModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedComponent } from './selected.component';
import {MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from '../table/table.module';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    TableModule
  ],
  declarations: [SelectedComponent],
  exports: [SelectedComponent]
})
export class SelectedModule { }
